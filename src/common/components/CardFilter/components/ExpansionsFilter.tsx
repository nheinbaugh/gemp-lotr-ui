import { Check } from '@mui/icons-material';
import Option, { optionClasses } from '@mui/joy/Option';
import ListItemDecorator, {
  listItemDecoratorClasses,
} from '@mui/joy/ListItemDecorator';
import {
  Chip,
  List,
  ListDivider,
  ListItem,
  Select,
  Typography,
} from '@mui/joy';
import React from 'react';
import {
  allExpansionsMetadata,
  deciperSetExpansionMetadata,
  otherFormatMetadata,
  playtestSetExpansionMetadata,
  commonFormatsMetadata,
} from '../../../../lotr-common/types/expansions';
import { CardFilterDropdownProps } from './CardFilter-props.interface';

function ExpansionsFilter({ filterChanged }: CardFilterDropdownProps) {
  const sections = {
    'Common Formats': commonFormatsMetadata,
    'Other Formats': otherFormatMetadata,
    'Individual Sets': deciperSetExpansionMetadata,
    Playtest: playtestSetExpansionMetadata,
  };
  return (
    <Select
      sx={{ width: '100%' }}
      placeholder="Filter by Set"
      onChange={(_, newValue) => filterChanged(newValue?.toString() || '')}
      slotProps={{
        listbox: {
          component: 'div',
          sx: {
            maxHeight: 240,
            overflow: 'auto',
            '--List-padding': '0px',
          },
        },
      }}
    >
      {Object.entries(sections).map(([name, options], index) => {
        const sectionOptions = Object.entries(options);
        return (
          <React.Fragment key={name}>
            {index !== 0 && <ListDivider role="none" />}
            <List
              aria-labelledby={`select-group-${name}`}
              sx={{ '--ListItemDecorator-size': '28px' }}
            >
              <ListItem id={`select-group-${name}`} sticky>
                <Typography
                  level="body3"
                  textTransform="uppercase"
                  letterSpacing="md"
                >
                  {name} ({sectionOptions.length})
                </Typography>
              </ListItem>
              {sectionOptions.map(([_, option]) => (
                <Option
                  key={option.value}
                  value={option.displayName}
                  label={
                    <>
                      <Chip
                        size="sm"
                        color="primary"
                        sx={{ borderRadius: 'xs', mr: 1, ml: -0.5 }}
                      >
                        {name}
                      </Chip>{' '}
                      {option.displayName}
                    </>
                  }
                  sx={{
                    [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:
                      {
                        opacity: 1,
                      },
                  }}
                >
                  <ListItemDecorator sx={{ opacity: 0 }}>
                    <Check />
                  </ListItemDecorator>
                  {option.displayName}
                </Option>
              ))}
            </List>
          </React.Fragment>
        );
      })}
    </Select>
  );
}

export default ExpansionsFilter;
