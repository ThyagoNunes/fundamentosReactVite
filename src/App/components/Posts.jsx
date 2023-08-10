import PropTypes from "prop-types";
import { Button } from "./Button";

export function Posts(props) {
  return (
    <>
      <article className="relative m-auto mt-2 w-11/12 border-2 border-violet-500 p-2 rounded">
        <strong>{props.post.title}</strong>
        <small className="block">{props.post.subtitle}</small>
        <p className="mt-2 mb-2 p-2 w-9/12 border-2 border-dashed border-violet-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          fugit eligendi delectus expedita nulla eum, voluptas, odio alias
          laboriosam culpa soluta adipisci libero quaerat, corrupti odit!
          Dolorum debitis natus deleniti.
        </p>
        <p>Likes: {props.post.likes}</p>

        <div className="flex gap-2 justify-end items-center w-44 absolute right-1 bottom-0">
          <Button onClick={() => props.onRemove(props.post.id)}>Remover</Button>
          <Button onClick={() => props.onRead(props.post.id)}>Ler</Button>
        </div>
      </article>
      <hr className="mt-2 w-11/12 m-auto" />
    </>
  );
}

Posts.propTypes = {
  onRead: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
