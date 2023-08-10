import PropTypes from "prop-types";
import { Posts } from "./Posts";

export function Post(props) {
  return (
    <>
      {props.post.read && (
        <s className="opacity-40">
          <Posts
            key={props.post.id}
            onRead={props.onRead}
            onRemove={props.onRemove}
            post={props.post}
          />
        </s>
      )}
      {!props.post.read && (
        <Posts
          key={props.post.id}
          onRead={props.onRead}
          onRemove={props.onRemove}
          post={props.post}
        />
      )}
    </>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
