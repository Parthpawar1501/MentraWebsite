import type {MetaFunction} from '@remix-run/node';
import MentraOS from '../imports/MentraOS';

export const meta: MetaFunction = () => {
  return [
    {title: 'MentraOS - Mentra'},
    {name: 'description', content: 'The operating system for your smart glasses'},
  ];
};

export default function MentraOSPage() {
  return (
    <div className="responsive-wrapper">
      <MentraOS />
    </div>
  );
}
