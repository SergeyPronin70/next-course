import Link from "next/link"
import { useState } from "react"
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    
    return (
        <MainContainer keywords={'js users'}>
            <h1>Users list</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <div> {user.name}</div>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    )
}

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json()
    
    return {
      props: {users}, // will be passed to the page component as props
    }
  }