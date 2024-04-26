import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
  

function Login() {
  return (
    <div>
      <Card className='w-[350px]'>
  <CardHeader>
    <CardTitle>Login To access</CardTitle>
    <CardDescription>Enter your to login</CardDescription>
  </CardHeader>
  <CardContent>
  <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
  </CardContent>
  <CardFooter>
  <Button className="w-full">Create account</Button>
  </CardFooter>
</Card>

    </div>
  )
}

export default Login
