import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { useState, useEffect } from 'react';


export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const [public_endpoint, setPublic] = useState([]);
  const [private_endpoint, setPrivate] = useState([]);

  useEffect(() => {
    fetch(`/cobra/api/public`)
      .then((res) => res.json())
      .then((public_endpoint) => {
        setPublic(public_endpoint)
      })
  }, [])

  useEffect(() => {
    fetch(`/cobra/api/private`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((private_endpoint) => {
        setPrivate(private_endpoint)
      })}, [])

  {console.log(user)}

  return (
      user && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            
            <h2>Public Endpoint</h2>
            <p>{public_endpoint.message}</p>

            <h2>Private Endpoint</h2>
            <p>{private_endpoint.message}</p>
          </div>
      ))}