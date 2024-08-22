import { createSignal, splitProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

type ShortTextInputProps = {
  ref: HTMLInputElement | HTMLTextAreaElement | undefined;
  onInput: (value: string) => void;
  fontSize?: number;
  disabled?: boolean;
} & Omit<JSX.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onInput'>;

const DEFAULT_HEIGHT = 56;

export const ShortTextInput = (props: ShortTextInputProps) => {
  const [local, others] = splitProps(props, ['ref', 'onInput', 'class']);
  const [height, setHeight] = createSignal(56);

  const handleInput = (e: Event) => {
    const target = e.currentTarget as HTMLTextAreaElement;
    if (props.ref) {
      if (target.value === '') {
        // reset height when value is empty
        setHeight(DEFAULT_HEIGHT);
      } else {
        setHeight(target.scrollHeight - 24);
      }
      target.scrollTo(0, target.scrollHeight);
      local.onInput(target.value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    // Handle Shift + Enter new line
    if (e.keyCode == 13 && e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      const target = e.currentTarget as HTMLTextAreaElement;
      target.value += '\n';
      handleInput(e);
    }
  };

  return (
    <textarea
      ref={props.ref}
      class={`focus:outline-none bg-transparent px-4 py-4 flex-1 w-full h-full min-h-[56px] max-h-[128px] text-input disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 rounded-2xl ${local.class || ''}`}
      disabled={props.disabled}
      style={{
        'font-size': props.fontSize ? `${props.fontSize}px` : '16px',
        resize: 'none',
        height: `${props.value !== '' ? height() : DEFAULT_HEIGHT}px`,
      }}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      {...others}
    />
  );
};
