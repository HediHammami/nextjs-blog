"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import { signOut, useSession } from "next-auth/react";

function AuthLinks() {
  const { status } = useSession();
  const [open, setOpen] = useState(false);
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <React.Fragment>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={() => signOut}>
            Logout
          </span>
        </React.Fragment>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notAuth" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLinks;
