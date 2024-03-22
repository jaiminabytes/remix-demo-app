/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, useActionData } from "@remix-run/react";
import styles from './Newnote.css';
import { useTransition as useNavigation } from "react";


function NewNote() {
    const navigation:any = useNavigation()
    const data:any= useActionData();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Form method="post" id="note-form">
        {data?.message && <p>{data.message}</p>}
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows={5} required />
      </p>
      <div className="form-actions">
      <button disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add Note'}
        </button>
      </div>
    </Form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}