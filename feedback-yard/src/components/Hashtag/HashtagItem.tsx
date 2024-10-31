type HashtagItemProps = {
  company: string;
};

export const HashtagItem = ({ company }: HashtagItemProps) => {
  return (
    <li key={company}>
      <button>#{company}</button>
    </li>
  );
};
