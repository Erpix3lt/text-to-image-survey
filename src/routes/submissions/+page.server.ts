// TODO: build load function, loading all the needed data
import supabase from '$lib/database/db'

 
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const { data, error } = await supabase
        .from(import.meta.env.VITE_SUPABASE_TABLE_NAME)
        .select()
        if (error) throw new Error(error.message)
        return data
}

