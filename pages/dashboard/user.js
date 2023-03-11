import { useRouter } from "next/router"

export default function User() {
    const router = useRouter()

    const navigateToMainPage = () => {
        router.push('/')
    }


    return (
        <>
            <h2>
                Dashboard - User (Projected Page...)
            </h2>


            <button onClick={() => navigateToMainPage()}>
                Navigate To Main Page...
            </button>
        </>
    )
}