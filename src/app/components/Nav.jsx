import Link from "next/link";

export function Nav() {
  return (
    <>
      <div className="navbar text-center justify-center bg-base-300">
        <Link className="btn btn-ghost text-2xl" href={"/"}>
          Task Track
        </Link>
      </div>
    </>
  );
}
