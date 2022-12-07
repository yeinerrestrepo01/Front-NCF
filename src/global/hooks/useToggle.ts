import { useState, useCallback } from 'react';

const useToggle = (initialValue: boolean): [boolean, () => void, () => void, () => void] => {
  const [open, setOpen] = useState(initialValue);

  const toggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const show = useCallback(() => {
    setOpen(true);
  }, []);

  return [open, toggle, close, show];
};

export default useToggle;
