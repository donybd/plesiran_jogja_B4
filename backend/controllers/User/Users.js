const db = require("../../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    const users = await db.query("SELECT id, name, email, phone, profile_image FROM user");
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ msg: "Terjadi kesalahan pada server saat mengambil data pengguna" });
  }
};

const Register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;

  if (password !== confPassword) {
    return res.status(400).json({ msg: "Password dan Konfirmasi Password tidak cocok" });
  }

  try {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const adminEmail = "adminjogja@gmail.com";
    const role = email === adminEmail ? "admin" : "user";

    await db.query("INSERT INTO user (name, email, password, role) VALUES (?, ?, ?, ?)", [name, email, hashPassword, role]);

    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ msg: "Terjadi kesalahan saat pendaftaran" });
  }
};

const Login = async (req, res) => {
  try {
    console.log("Login request body:", req.body);

    const { email, password } = req.body;

    const rows = await db.query("SELECT * FROM user WHERE email = ?", [email]);
    const user = rows[0];

    if (!user) {
      return res.status(404).json({ msg: "Email tidak ditemukan" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ msg: "Password Salah" });
    }

    const { id, name, role } = user;
    const accessToken = jwt.sign({ userId: id, name, email, role }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ userId: id, name, email, role }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    await db.query("UPDATE user SET refresh_token = ? WHERE id = ?", [refreshToken, id]);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Mengirimkan ID, accessToken dan role dalam respons login
    res.json({ accessToken, role, id });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.sendStatus(204);
  }

  try {
    const rows = await db.query("SELECT * FROM user WHERE refresh_token = ?", [refreshToken]);
    const user = rows[0];

    if (!user) {
      return res.sendStatus(204);
    }

    await db.query("UPDATE user SET refresh_token = NULL WHERE id = ?", [user.id]);

    res.clearCookie("refreshToken");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error during logout:", error.message);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// Menambahkan fungsi destroy untuk menghapus user berdasarkan id
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const rows = await db.query("SELECT * FROM user WHERE id = ?", [id]);
    const user = rows[0];

    if (!user) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    await db.query("DELETE FROM user WHERE id = ?", [id]);

    res.json({ msg: "User berhasil dihapus" });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({ msg: "Terjadi kesalahan pada server saat menghapus user" });
  }
};

const show = async (req, res) => {
  const { id } = req.params;

  try {
    const rows = await db.query("SELECT id, name, email, role FROM user WHERE id = ?", [id]);
    const user = rows[0];

    if (!user) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user by id:", error.message);
    res.status(500).json({ msg: "Terjadi kesalahan pada server saat mengambil data pengguna" });
  }
};

module.exports = { getUsers, Register, Login, Logout, deleteUser, show };
