'use client'
import { LogOut } from "lucide-react";
import SubmitButton from "./submit-button";
import { signOut } from "@/lib/actions";

export default function SignOutButton() {
    return <form action={signOut}>
        <SubmitButton variant='ghost2' size='sm'>
            <LogOut className="w-5 h-5" />
        </SubmitButton>
    </form>
}