import * as React from 'react';
import './Monitor.css';
import { Text, ITextProps } from '@fluentui/react/lib/Text';
import { Dropdown, IDropdownOption ,IDropdownStyles} from '@fluentui/react/lib/Dropdown';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { mergeStyles, mergeStyleSets } from '@fluentui/react/lib/Styling';
import { DetailsList, SelectionMode, IColumn } from '@fluentui/react/lib/DetailsList';


const iconClass = mergeStyles({
    fontSize: 50,
    height: 50,
    width: 50,
    margin: '0 25px',
  });
const classNames = mergeStyleSets({
    textColor: {
        color: 'white',
        cursor: 'pointer'
    },
    
    greenYellow: [{ color: 'greenyellow' }, iconClass],

})

const title = "Alarms Alerts & Events(AAE) Monitor"
const dropdownStyles1 : Partial<IDropdownStyles> = { dropdown: { width: 300, float: 'right', fontWeight: 'bolder', fontSize: '20px' } };
const dropdownStyles2 = { dropdown: { width: 300, fontWeight: 'bolder', fontSize: '20px' } };
const controlStyles = {
    root: {
        margin: '0px 18px 0px 18px',
        maxWidth: '400px',

    },
};

const trainOptions: IDropdownOption[] = [
    { key: 'TS 11202130', text: 'TS 11202130' },
    { key: 'TS 11202131', text: 'TS 11202131' },
    { key: 'TS 11202132', text: 'TS 11202132' },
    { key: 'TS 11202133', text: 'TS 11202133' },
    { key: 'TS 11202134', text: 'TS 11202134' },
    { key: 'TS 11202135', text: 'TS 11202135' },
    { key: 'TS 11202136', text: 'TS 11202136' },
];
const unitOptions: IDropdownOption[] = [
    { key: 'All Units', text: 'All Units' },
    { key: 'All Units', text: 'All Units' },
    { key: 'All Units', text: 'All Units' },
    { key: 'All Units', text: 'All Units' },
    { key: 'All Units', text: 'All Units' },
    { key: 'All Units', text: 'All Units' },
];
const columns: IColumn[] = [
  { key: 'column1', name: 'Type', fieldName: 'type', minWidth: 50, maxWidth: 60, isResizable: true },
  { key: 'column2', name: 'AAE Code', fieldName: 'aaeCode', minWidth: 50, maxWidth: 100, isResizable: true },
  { key: 'column3', name: 'Description', fieldName: 'description', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column4', name: 'Mode', fieldName: 'mode', minWidth: 50, maxWidth: 60, isResizable: true },
  { key: 'column5', name: 'Train No.', fieldName: 'trainNo', minWidth: 50, maxWidth: 100, isResizable: true },
  { key: 'column6', name: 'Component', fieldName: 'component', minWidth: 100, maxWidth: 500, isResizable: true },
  { key: 'column7', name: 'System', fieldName: 'system', minWidth: 150, maxWidth: 1000, isResizable: true },
  { key: 'column8', name: 'Failure', fieldName: 'failure', minWidth: 200, maxWidth: 1500, isResizable: true },
  { key: 'column9', name: 'Date & Time', fieldName: 'dateTime', minWidth: 110, maxWidth: 300, isResizable: true },
  { key: 'column10', name: 'Priority', fieldName: 'priority', minWidth: 100, maxWidth: 150, isResizable: true },
  { key: 'column11', name: 'Ticket', fieldName: 'ticket', minWidth: 100, maxWidth: 200, isResizable: true },
];
export interface IDocument {
  type: string;
  aaeCode: string;
  description: string;
  mode: string;
  trainNo: number;
  component: string;
  system:string;
  failure:string;
  dateTime: string;
  priority:string;
  ticket: number;
}

const data : IDocument[]= [
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
    {type:'TYPE',aaeCode:'TS 1234567',description:'Starting Engine Failure',mode:'ON',trainNo:11202122,component:'Relay Sensor failure',system:'Automatic Controller',failure:'Sensor',dateTime:"16-01-2022",priority:'High',ticket:129762},
]
export const Monitor = () => {
    return (
        <>

            <div className="ms-Grid " dir="ltr">
                <div className="ms-Grid-row Main-header">
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
                        <Text className={classNames.textColor} variant={'xLarge' as ITextProps['variant']}>{title}</Text>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg9" style={{ position: 'absolute', right: '10px' }}>
                        <Dropdown
                            placeholder="TS 12345678 "
                            options={trainOptions}
                            styles={dropdownStyles1} /></div>
                </div>
                <div className="ms-Grid-row Label-header">
                    <div className="ms-Grid-col ms-sm5 ms-md5 ms-lg5">
                        <Dropdown placeholder="All Units" options={unitOptions} styles={dropdownStyles2} />
                    </div>
                    <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg1">
                        <Toggle label="Alarms(10)" inlineLabel styles={controlStyles} />
                    </div>
                    <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg1">
                        <Toggle label="Alerts(10)" inlineLabel styles={controlStyles} />
                    </div>
                    <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg1">
                        <Toggle label="Events(10)" inlineLabel styles={controlStyles} />
                    </div>
                    <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg1">
                        <span>|</span>
                    </div>
                    <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg1">
                          <Toggle label="No Tickets" inlineLabel styles={controlStyles} />
                    </div>
                    <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                    <FontIcon aria-label="Train" iconName="TrainSolid" className={classNames.greenYellow} />
                    </div>
               </div>
                <div className="ms-Grid-row Nav-header">
                    <div className="ms-Grid-col ms-sm6 ms-md5 ms-lg4 pl-2">
                    <Text className={classNames.textColor} style={{color:'#0483d1'}} variant={'large' as ITextProps['variant']}>Active(30)</Text> &nbsp;&nbsp;
                    <Text className={classNames.textColor} variant={'large' as ITextProps['variant']}>Acknowledged(30)</Text> &nbsp;&nbsp;
                    <Text className={classNames.textColor} variant={'large' as ITextProps['variant']}>Unacknowledged(30)</Text> &nbsp;&nbsp;
                    <Text className={classNames.textColor} variant={'large' as ITextProps['variant']}>Isolated(30)</Text>
                    <hr/>
                    </div>
                  
                </div>
                     <DetailsList
                        columns={columns}
                        items={data}
                        selectionMode={SelectionMode.none}
                        />
                
                </div>




        </>

    )
}