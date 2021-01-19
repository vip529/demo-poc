export interface IFormComponmentProps {
  subject: string;
}

const FormComponment: React.FC<IFormComponmentProps> = ({ subject }: IFormComponmentProps) => {
  return <div>Hello{subject.toUpperCase()}</div>;
};

export default FormComponment;
