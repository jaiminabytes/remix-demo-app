import styles from "./Notelist.css";
interface Inotes {
  notes: [
    {
      title: string;
      description: string;
    }
  ];
}

function NoteList({ notes }: NonNullable<Inotes>) {
  return (
    <ul id="note-list">
      {notes.map(
        (
          note: {
            title: string;
            description: string;
          },
          index: number
        ) => (
          <li key={index} className="note">
            <article>
              <header>
                <ul className="note-meta">
                  <li>#{index + 1}</li>
                  {/* <li>
                    <time dateTime={note.id}>
                      {new Date(note.id).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                  </li> */}
                </ul>
                <h2>{note.title}</h2>
              </header>
              <p>{note.description}</p>
            </article>
          </li>
        )
      )}
    </ul>
  );
}

export default NoteList;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
