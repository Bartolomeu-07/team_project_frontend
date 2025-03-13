import styles from './SportSelector.module.scss';
import Select, {
  components,
  DropdownIndicatorProps,
  MultiValue,
  OptionProps,
  SingleValueProps,
} from 'react-select';
import type { SingleValue } from 'react-select';
import DropdownIndicatorIcon from '../../assets/icons/dropdown-indicator.svg?react';
import { Sport } from '../../types/SportType';

type SportSelectorProps = {
  options: Sport[];
  value: Sport;
  onChange: (value: SingleValue<Sport> | MultiValue<Sport>) => void;
};

const DropdownIndicator = (props: DropdownIndicatorProps<Sport>) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownIndicatorIcon />
    </components.DropdownIndicator>
  );
};

const Option = (props: OptionProps<Sport>) => {
  const { data } = props;
  const { icon: Icon } = data as Sport;
  return (
    <components.Option {...props}>
      {<Icon />}
      {(data as Sport).label}
    </components.Option>
  );
};

const SingleValue = (props: SingleValueProps<Sport>) => {
  const { data } = props;
  const { icon: Icon } = data as Sport;
  return (
    <components.SingleValue
      {...props}
      className={styles.SelectInputOptionContainer}
    >
      {<Icon className={styles.SelectInputOptionIcon} />}
      {(data as Sport).label}
    </components.SingleValue>
  );
};

export const SportSelector = ({
  options,
  onChange,
  value,
}: SportSelectorProps) => {
  const styles = {
    container: (base: any) => ({
      ...base,
    }),
    valueContainer: (base: any) => ({
      ...base,
      padding: '0',
      margin: '0',
    }),
    control: (base: any) => ({
      ...base,
      border: 'none',
      boxShadow: 'none',
      backgroundColor: 'rgba(33, 33, 33, 1)',
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: 'rgba(33, 33, 33, 1)',
      padding: '8px',
      margin: '0',
      borderRadius: '5px',
    }),
    singleValue: (base: any) => ({
      ...base,
      display: 'flex',
      gap: '8px',
      width: 'fit-content',
      alignItems: 'center',
      color: 'rgb(217, 217, 217)',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '22px',
      padding: '13px 8px',
      margin: '0',
    }),
    option: (base: any, state: any) => ({
      ...base,
      padding: '8px',
      marginBottom: '4px',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '22px',
      color: state.isSelected
        ? 'rgba(33, 33, 33, 1)'
        : 'rgba(217, 217, 217, 1)',
      background: state.isSelected
        ? 'rgba(67, 198, 172, 1)'
        : state.isFocused
          ? 'rgba(64, 64, 64, 1)'
          : 'none',
      ':active': {
        backgroundColor: 'none',
      },
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: 'none',
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      padding: '13px 8px',
    }),
  };
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      styles={styles}
      components={{ DropdownIndicator, Option, SingleValue }}
      isSearchable={false}
    />
  );
};
