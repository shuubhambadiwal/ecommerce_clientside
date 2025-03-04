import { BadgeCheck, LayoutDashboard, ShoppingBasket } from "lucide-react"

export const  registerFormControls = [
    {
        name : 'userName',
        label : 'User name',
        placeholder : 'Enter your user name',
        componentType : 'input',
        type : 'text', 
        options: []
    },
    {
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email',
        componentType : 'input',
        type : 'email', 
    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your password',
        componentType : 'input',
        type : 'password', 
    }
]

export const  loginFormControls = [
    {
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email',
        componentType : 'input',
        type : 'email', 
    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your password',
        componentType : 'input',
        type : 'password', 
    }
] 
