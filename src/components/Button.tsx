import React from 'react';
import { IContextualMenuProps, IIconProps, Stack, IStackStyles } from '@fluentui/react';
import { CommandBarButton } from '@fluentui/react/lib/Button';

const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'emailMessage',
        text: 'Email message',
        iconProps: { iconName: 'Mail' },
      },
      {
        key: 'calendarEvent',
        text: 'Calendar event',
        iconProps: { iconName: 'Calendar' },
      },
    ],
  };
  
  const addIcon: IIconProps = { iconName: 'Add' };
  const mailIcon: IIconProps = { iconName: 'Mail' };
  const stackStyles: Partial<IStackStyles> = { root: { height: 44 } };

const Button = ()=> {
    return(
        <Stack horizontal styles={stackStyles}>
        <CommandBarButton
          iconProps={addIcon}
          text="New item"
          // Set split=true to render a SplitButton instead of a regular button with a menu
          // split={true}
          menuProps={menuProps}
          
        />
        <CommandBarButton iconProps={mailIcon} text="Send mail" />
      </Stack>
    )
}
export default Button;