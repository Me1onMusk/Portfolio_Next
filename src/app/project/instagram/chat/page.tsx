
import ChatPeopleList from "@/components/instagram/chat-people-list";
import ChatScreen from "@/components/instagram/chat-screen";
import { createServerSupabaseClient } from "@/utils/supabase/server";

export default async function Page() {

    const supabase = await createServerSupabaseClient();
    const { data: {session} } = await supabase.auth.getSession();

    return(
        <div>
            <ChatPeopleList loggedInUser={ session?.user } />
            <ChatScreen />
        </div>
    );
};