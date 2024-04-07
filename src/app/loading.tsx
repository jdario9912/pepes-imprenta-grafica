import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Skeleton,
} from "@nextui-org/react";
import UserLoader from "./components/loaders/user";
import ButtonLoader from "./components/loaders/button";

const Loading = () => (
  <div>
    <Navbar>
      <NavbarBrand>
        <UserLoader />
      </NavbarBrand>

      <NavbarContent justify="end" className="gap-x-3">
        <NavbarItem>
          <ButtonLoader />
        </NavbarItem>
        <NavbarItem>
          <ButtonLoader />
        </NavbarItem>
      </NavbarContent>
    </Navbar>

    <section>
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
    </section>
  </div>
);

export default Loading;
