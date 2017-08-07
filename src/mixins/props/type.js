export default function (...types) {
  types.push('');

  return {
    props: {
      type: {
        type: String,
        default: '',
        validator(value) {
          return types.includes(value);
        }
      }
    }
  };
}
