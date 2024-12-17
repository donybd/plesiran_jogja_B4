
import { Link, useLocation } from "react-router-dom";
import { FaGlobe, FaMap, FaUtensils } from "react-icons/fa6";
const DiscoverNav = () => {
	const location = useLocation();
	return (
		<div className="row">
			<div className="col-12 d-flex justify-content-center">
				<div
					className="sub-navbar text-light d-flex align-items-center justify-content-center"
					style={{
						width: '100%',
						maxWidth: '600px',
						height: '60px',
						marginTop: '80px',
						borderRadius: '8px',
					}}
				>
					<ul className="nav d-flex justify-content-center flex-wrap flex-md-row flex-column">
						<li className="nav-item d-flex align-items-center">
							<Link
								className={`nav-link text-light d-flex align-items-center px-3 py-3 ${
									location.pathname === '/discover' ? 'active' : ''
								}`}
								to={`/discover`}
							>
								Destination
								<FaMap className="ms-2" />
							</Link>
						</li>
						<li className="nav-item d-flex align-items-center">
							<Link
								className={`nav-link text-light d-flex align-items-center px-3 py-3 ${
									location.pathname === '/discover/culinary' ? 'active' : ''
								}`}
								to={`/discover/culinary`}
							>
								Culinary
								<FaUtensils className="ms-2" />
							</Link>
						</li>
						<li className="nav-item d-flex align-items-center">
							<Link
								className={`nav-link text-light d-flex align-items-center px-3 py-3 ${
									location.pathname === '/discover/culture' ? 'active' : ''
								}`}
								to={`/discover/culture`}
							>
								Culture
								<FaGlobe className="ms-2" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default DiscoverNav;