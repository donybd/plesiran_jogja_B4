import styles from './Settings.module.css';

import rpfile from "../../../assets/img/foto.webp";
const Settings = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.profileSettings}>
          <h3>Profile Settings</h3>
          <div className={styles.profilePic}>
            <img alt="Profile Picture" height="100" src={rpfile} width="100" />
            <button>Remove Image</button>
          </div>
          <p>Max file size 1 MB, Minimum dimension: 136x136 and Suitable files are .jpg &amp; .png</p>
          <form>
            <label htmlFor="username"> User Name </label>
            <input id="username" type="text" value="Ammanda" />
            <label htmlFor="email"> Email Address </label>
            <input id="email" type="email" value="ammandahmifi@gmail.com" />
            <label htmlFor="contact"> Contact Number </label>
            <input id="contact" type="text" value="08282139100" />
            <label htmlFor="password"> Password </label>
            <input id="password" type="password" value="*****" />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
