
import Auth from "@/app/auth/page";
import MainLayout from "@/components/instagram/main-layout";
import { createServerSupabaseClient } from "@/utils/supabase/server";

export default async function Page() {

    const supabase = await createServerSupabaseClient();
    const { data: {session} } = await supabase.auth.getSession();

    return (
        <div className="container mx-auto">
            <div>
                {
                    session?.user ?
                    (
                        <MainLayout user={session?.user} />
                    ) : 
                    (
                        <Auth path={'insta'} />
                    )
                }
            </div>
        </div>
    );
};