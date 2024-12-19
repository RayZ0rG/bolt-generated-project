import { Button } from "@/components/ui/button"
    import Link from "next/link"

    export default function Home() {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-4xl font-bold mb-8">
            Medical Lab Quality Control
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Streamline your lab's quality control process with our modern SaaS solution.
          </p>
          <div className="flex space-x-4">
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="secondary">Sign Up</Button>
            </Link>
          </div>
        </div>
      )
    }
