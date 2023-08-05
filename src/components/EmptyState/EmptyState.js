import { PlusIcon } from '@heroicons/react/20/solid';
import { Button } from 'components/Button/Button';

export const EmptyState = ({ title, description, action }) => {
  return (
    <div className="py-5 border rounded-lg h-96 overflow-hidden flex flex-col items-center justify-center text-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true">
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-1">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {!!action && (
        <div className="mt-6 flex justify-center">
          <Button onClick={action.onClick}>
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
};
