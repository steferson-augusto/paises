import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  height: 600px;
  padding: 15px 0px;
  color: var(--text-color);
  --ck-color-text: var(--text-color);
  --ck-color-base-foreground: red;
  --ck-color-base-background: transparent;
  /* --ck-color-base-active-focus: var(--primary);
  --ck-color-base-active: var(--primary);
  --ck-color-base-focus: #f00;
  --ck-color-focus-border: #f00; */
  --ck-color-base-border: var(--text-color);
  --ck-focus-ring: 1px solid var(--primary);
  --ck-color-toolbar-background: transparent;
  --ck-color-toolbar-border: var(--text-color);
  --ck-color-button-default-hover-background: var(--surface-hover);
  --ck-color-button-on-background: var(--primary);
  --ck-color-panel-background: var(--surface-bg);

  .ck.ck-button.ck-on,
  a.ck.ck-button.ck-on {
    color: var(--header-text);
  }
`
