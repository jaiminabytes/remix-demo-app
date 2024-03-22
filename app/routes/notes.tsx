import { getStoredNotes, storeNotes } from "../data/notes";
import NewNote, { links as noteslink } from "../component/Newnote";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NoteList ,{ links as noteListLinks } from "../component/Notelist";




export async function loader() {
  // eslint-disable-next-line no-debugger
  const notes = await getStoredNotes();
  return notes;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function action({request}:any){
  const formData = await request.formData();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const noteData:any= Object.fromEntries(formData);
  if (noteData.title.trim().length < 5) {
    return { message: 'Invalid title - must be at least 5 characters long.' };
  }
  await storeNotes(noteData);
  return redirect('/notes');

}

// export function links() {
//   return [...noteslink(), ...noteListLinks()];
// }

export default function DemoPage() {

  const notes:[{
    title: string;
    description: string;
  }]= useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <NewNote />
      <NoteList notes={notes} />
    </div>
  );
}
export function links(){
  return [{rel:'stylesheet',href:noteListLinks}]
}