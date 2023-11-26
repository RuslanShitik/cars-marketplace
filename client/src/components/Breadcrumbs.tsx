import React, {FC} from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: FC = () => {
  const location = useLocation();
  if (location.pathname === '/') return null

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="px-3">
      <ul className="flex capitalize font-bold">
        {pathnames.map((path, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={path}>
              {isLast ? (
                <span>{path}</span>
              ) : (
                <>
                  <Link className="text-blue-500" to={routeTo}>{path}</Link>
                  <span className="mx-2">/</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
