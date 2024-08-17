import Link from 'next/link';


const AuthLinks = () => {
  const status = "authenticated";
  return (
    <div>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        < div className="flex items-center sm:gap-4 sm:flex-row flex-col my-2 sm:my-0 ">
          <Link href="/write">Write</Link>
          <Link href="/logout">Logout</Link>
        </div>
      )}
    </div>
  )
}

export default AuthLinks