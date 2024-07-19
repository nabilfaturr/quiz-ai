import StudentSignInButton from "@/components/shared/Button/StudentSignInButton";
import TeacherSignInButton from "@/components/shared/Button/TeacherSignInButton";
import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="space-y-2 inline-flex flex-col my-4">
        <StudentSignInButton />
        <TeacherSignInButton />
      </div>
      {session && (
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <Button type="submit">Logout</Button>
        </form>
      )}
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
