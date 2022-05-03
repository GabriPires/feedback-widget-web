import { ArrowLeft } from 'phosphor-react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) => {
  const { title, image } = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type={'button'}
          className={'top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'}
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight={'bold'} className={'w-4 h-4'} />
        </button>

        <span className={'text-xl leading-6 flex items-center gap-2'}>
          <img src={image.source} alt={image.alt} className={'w-6 h-6'} />
          {title}
        </span>
        <CloseButton />
      </header>

      <div className={'flex py-8 gap-2 w-full'}></div>
    </>
  );
};
