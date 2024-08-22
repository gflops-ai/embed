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
        setHeight(DEFAULT_HEIGHT);
      } else {
        setHeight(target.scrollHeight - 24);
      }
      target.scrollTo(0, target.scrollHeight);
      local.onInput(target.value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
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
      class={`focus:outline-none bg-transparent px-4 py-3 flex-1 w-full text-input disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 ${local.class || ''}`}
      disabled={props.disabled}
      style={{
        'font-size': props.fontSize ? `${props.fontSize}px` : '16px',
        resize: 'none',
        height: `${props.value !== '' ? height() : DEFAULT_HEIGHT}px`,
        'min-height': '48px',
        'max-height': '120px',
      }}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      {...others}
    />
  );
};
