import ReactHookForm from '@/components/reactHookForm';
import ReactHookFormZod from '@/components/reactHookFormZod';
import ReactForm from '../components/reactForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <ReactForm /> */}
      <ReactHookForm />
      {/* <ReactHookFormZod /> */}
    </main>
  );
}
