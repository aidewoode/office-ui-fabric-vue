export default function (...size) {
  size.push('');

  return {
    props: {
      size: {
        type: String,
        default: '',
        validator(value) {
          return size.includes(value);
        }
      }
    }
  };
}
