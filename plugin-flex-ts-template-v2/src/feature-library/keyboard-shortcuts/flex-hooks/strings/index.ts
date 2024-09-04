import esES from './es-es.json';
import esMX from './es-mx.json';
import ptBR from './pt-br.json';
import th from './th.json';
import zhHans from './zh-hans.json';

// Export the template names as an enum for better maintainability when accessing them elsewhere
export enum StringTemplates {
  DefaultTitle = 'KeyboardMgrDefaultShortcuts',
  CustomTitle = 'KeyboardMgrCustomShortcuts',
  SettingsTitle = 'KeyboardMgrSettings',
  MainTitle = 'KeyboardMgrTitle',
  HeaderModifiers = 'KeyboardMgrHeaderModifier',
  HeaderShortcuts = 'KeyboardMgrHeaderShortcuts',
  HeaderActions = 'KeyboardMgrHeaderActions',
  HeaderThrottle = 'KeyboardMgrHeaderThrottle',
  HeaderEdit = 'KeyboardMgrHeaderEdit',
  NotConfiguredMsg = 'KeyboardMgrMsg',
  ErrorMsgNoDefaultShortcuts = 'KeyboardMgrNoDefaultShortcuts',
  ErrorMsgNoCustomShortcuts = 'KeyboardMgrNoCustomShortcuts',
  WarningMsg = 'KeyboardMgrWarningMsg',
  TooltipMsg = 'KeyboardMgrTooltipMsg',
  ToasterDeleteNotification = 'KeyboardMgrToastDelete',
  ToasterSuccessNotification = 'KeyboardMgrToastSuccess',
  ModalTitle = 'KeyboardMgrModalTitle',
  ModalCurrentConfig = 'KeyboardMgrModalCurrentConfig',
  ModalNewConfig = 'KeyboardMgrModalNewConfig',
  ModalHeaderAction = 'KeyboardMgrModalHeaderAction',
  ModalHeaderCurrent = 'KeyboardMgrModalHeaderCurrent',
  ModalInputLabel = 'KeyboardMgrModalInputLabel',
  ModalHelpText = 'KeyboardMgrModalHelpText',
  SaveChangesButton = 'KeyboardMgrSaveChangesButton',
  ModalThrottleHelpText = 'KeyboardMgrModalThrottleHelpText',
  ModalThrottleInputLabel = 'KeyboardMgrModalThrottleInput ',
  ModalInputPlaceholder = 'KeyboardMgrModalInputPlaceholder ',
  ModalThrottlePlaceholder = 'KeyboardMgrModalThrottlePlaceholder ',
  ModalSetShortcutErrorMsg = 'KeyboardMgrModalSetShortcutErrorMsg',
  SettingsResetShortcuts = 'KeyboardMgrResetShortcuts',
  SettingsResetShortcutsText = 'KeyboardMgrResetShortcutsText',
  SettingsResetShortcutsTitle = 'KeyboardMgrResetShortcutsTitle',
  SettingsRemoveShortcuts = 'KeyboardMgrRemoveShortcuts',
  SettingsRemoveShortcutsText = 'KeyboardMgrRemoveShortcutsText',
  SettingsDeleteIndividualShortcuts = 'KeyboardMgrDeleteIndividualShortcuts',
  SettingsDeleteIndividualShortcutsText = 'KeyboardMgrDeleteIndividualShortcutsText',
  SettingsEnableKeyThrottling = 'KeyboardMgrEnableKeyThrottling',
  SettingsEnableKeyThrottlingText = 'KeyboardMgrEnableKeyThrottlingText',
  SettingsToastDisableNotification = 'KeyboardMgrToastDisableNotification',
  SettingsToastResetNotification = 'KeyboardMgrToastResetNotification',
  SideNaveTitle = 'KeyboardMgrSideNavTitle',
  CustomShortcutToggleDialpad = 'KeyboardMgrCustomShortcutToggleDialpad',
  CustomShortcutToggleSidebar = 'KeyboardMgrCustomShortcutToggleSidebar',
  CustomShortcutNavToTask = 'KeyboardMgrCustomShortcutNavToTask',
  CustomShortcutDebugAssist = 'KeyboardMgrCustomShortcutDebugAssist',
  CustomShortcutNavigateToKeyboardShortcuts = 'KeyboardMgrCustomShortcutNavigateToKeyboardShortcuts',
  CustomShortcutNavigateToTeamsView = 'KeyboardMgrCustomShortcutNavigateToTeamsView',
  CustomShortcutNavigateToQueuesView = 'KeyboardMgrCustomShortcutNavigateToQueuesView',
  CustomShortcutToggleCallRecording = 'KeyboardMgrCustomShortcutToggleCallRecording',
  CustomShortcutPauseCallRecording = 'KeyboardMgrCustomShortcutPauseCallRecording',
  CustomShortcutResumeCallRecording = 'KeyboardMgrCustomShortcutResumeCallRecording',
}

export const stringHook = () => ({
  'en-US': {
    [StringTemplates.DefaultTitle]: 'Default keyboard shortcuts',
    [StringTemplates.CustomTitle]: 'Custom keyboard shortcuts',
    [StringTemplates.SettingsTitle]: 'Keyboard shortcuts settings',
    [StringTemplates.MainTitle]: 'My Shortcut Settings',
    [StringTemplates.HeaderModifiers]: 'Modifiers',
    [StringTemplates.HeaderShortcuts]: 'Shortcuts',
    [StringTemplates.HeaderActions]: 'Actions',
    [StringTemplates.HeaderThrottle]: 'Throttle (ms)',
    [StringTemplates.HeaderEdit]: 'Edit',
    [StringTemplates.NotConfiguredMsg]: 'Not configured',
    [StringTemplates.ErrorMsgNoDefaultShortcuts]:
      'There are no configured keyboard shortcuts. Please reset your keyboard settings to enable keyboard shortcut customization.',
    [StringTemplates.ErrorMsgNoCustomShortcuts]:
      '   There are no configured custom keyboard shortcuts. Please reset your keyboard settings to enable custom keyboard shortcuts.',
    [StringTemplates.WarningMsg]: 'Re-enable Keyboard Shortcuts',
    [StringTemplates.TooltipMsg]: 'Ctrl and Shift are the default modifiers that cannot be changed.',
    [StringTemplates.ToasterDeleteNotification]:
      'Keyboard shortcut named {{actionName}} has been successfully deleted.',
    [StringTemplates.ToasterSuccessNotification]:
      'Keyboard action {{actionName}} modified successfully from {{oldShortcut}} to {{upperCase}}! Your new keyboard shortcut is: Ctrl + Shift + {{upperCase}},',
    [StringTemplates.ModalTitle]: 'Modify a keyboard shortcut',
    [StringTemplates.ModalCurrentConfig]: 'Current configuration',
    [StringTemplates.ModalNewConfig]: 'New configuration',
    [StringTemplates.ModalHeaderAction]: 'Action name',
    [StringTemplates.ModalHeaderCurrent]: 'Current shortcut',
    [StringTemplates.ModalInputLabel]: 'New keyboard shortcut',
    [StringTemplates.ModalThrottleInputLabel]: 'Throttle',
    [StringTemplates.ModalHelpText]: 'Enter your new keyboard shortcut',
    [StringTemplates.SaveChangesButton]: 'Save changes',
    [StringTemplates.ModalThrottleHelpText]: 'Enter the shortcut throttle',
    [StringTemplates.ModalInputPlaceholder]: 'Single character',
    [StringTemplates.ModalThrottlePlaceholder]: 'Number in milliseconds',
    [StringTemplates.ModalSetShortcutErrorMsg]:
      'A shortcut with key mapping {{parsedShortcut}} already exists and it is assigned to the {{actionName}} action.',
    [StringTemplates.SettingsResetShortcuts]: 'Reset keyboard shortcuts',
    [StringTemplates.SettingsResetShortcutsText]: `Reset all of your keyboard shortcuts to the default values. This option will delete all of the custom shortcut mappings and revert them to their original values. This is an irreversible action.`,
    [StringTemplates.SettingsResetShortcutsTitle]: 'Reset keyboard shortcut settings',
    [StringTemplates.SettingsRemoveShortcuts]: 'Remove all shortcuts',
    [StringTemplates.SettingsRemoveShortcutsText]: `Remove and disable all keyboard shortcuts, including the custom ones; your shortcuts will no longer work. Please keep in mind that
    this is an irreversible action and you will have to reconfigure all of your keyboard shortcuts.`,
    [StringTemplates.SettingsDeleteIndividualShortcuts]: 'Delete individual shortcuts',
    [StringTemplates.SettingsDeleteIndividualShortcutsText]: `This setting enables you to delete individual keyboard shortcut mappings.`,
    [StringTemplates.SettingsEnableKeyThrottling]: 'Enable key throttling',
    [StringTemplates.SettingsEnableKeyThrottlingText]: `The throttle time in milliseconds which can be set to prevent the shortcut from being triggered again within the set amount of time. Default value is 50ms to prevent Flex from being overloaded by repeated firings, and to provide a more seamless visual experience.`,
    [StringTemplates.SettingsToastDisableNotification]: `All keyboard shortcuts have been disabled.`,
    [StringTemplates.SettingsToastResetNotification]: `All keyboard shortcuts have been reset to the default values!`,
    [StringTemplates.SideNaveTitle]: 'Keyboard Shortcuts',
    [StringTemplates.CustomShortcutToggleDialpad]: 'Toggle dialpad',
    [StringTemplates.CustomShortcutToggleSidebar]: 'Toggle sidebar',
    [StringTemplates.CustomShortcutNavToTask]: 'Navigate to tasks',
    [StringTemplates.CustomShortcutDebugAssist]: 'Debugging assistance',
    [StringTemplates.CustomShortcutNavigateToKeyboardShortcuts]: 'Navigate to keyboard shortcuts',
    [StringTemplates.CustomShortcutNavigateToTeamsView]: 'Navigate to Teams View',
    [StringTemplates.CustomShortcutNavigateToQueuesView]: 'Navigate to Real-time Queues View',
    [StringTemplates.CustomShortcutToggleCallRecording]: 'Toggle call recording pause/resume',
    [StringTemplates.CustomShortcutPauseCallRecording]: 'Pause call recording',
    [StringTemplates.CustomShortcutResumeCallRecording]: 'Resume call recording',
  },
  'es-ES': esES,
  'es-MX': esMX,
  'pt-BR': ptBR,
  th,
  'zh-Hans': zhHans,
});
