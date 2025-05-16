import { useContext } from 'react';
import { Link } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { Button } from './ui/button';

const NavBar = () => {
  const user = null;

  return (
    <div className="bg-teal-800 shadow-sm gap-5">
      <NavigationMenu>
        <Button className="text-xl">Store</Button>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link to="/products">Products</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
              <div className="mx-2">
                <span className="badge badge-sm indicator-item">5</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{' '}
              </svg>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              ></div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">5 Items</span>
                  <span className="text-info">Subtotal: $99</span>
                  <div className="card-actions">
                    <Link to="/cart" className="btn btn-primary btn-block">
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <div>
            <NavigationMenuLink>
              <Link to={'/auth/login'} className="btn">
                Sign in
              </Link>
            </NavigationMenuLink>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
export default NavBar;
