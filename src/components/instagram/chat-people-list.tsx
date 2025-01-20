
import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { useIdStore, useIndexStore, usePresenceState } from "@/utils/zustand/store";

export default function ChatPeopleList({ loggedInUser }) {

    const supabase = createBrowserSupabaseClient(); 
    const { selectedUserId, setSelectedUserId } = useIdStore();
    const { selectedUserIndex, setSelectedUserIndex } = useIndexStore();   
    const { presence, setPresence } = usePresenceState(); 

    return (
        <div>
            {
                
            }
        </div>
    );
};