/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.ErrorResponse = require('./errorResponse');
exports.Key = require('./key');
exports.UsageCounterName = require('./usageCounterName');
exports.Usage = require('./usage');
exports.Statistics = require('./statistics');
exports.RunbookAssociationProperty = require('./runbookAssociationProperty');
exports.Resource = require('./resource');
exports.ProxyResource = require('./proxyResource');
exports.Webhook = require('./webhook');
exports.Variable = require('./variable');
exports.JobProvisioningStateProperty = require('./jobProvisioningStateProperty');
exports.DscConfigurationAssociationProperty = require('./dscConfigurationAssociationProperty');
exports.DscCompilationJob = require('./dscCompilationJob');
exports.Credential = require('./credential');
exports.ConnectionTypeAssociationProperty = require('./connectionTypeAssociationProperty');
exports.Connection = require('./connection');
exports.Certificate = require('./certificate');
exports.RunbookParameter = require('./runbookParameter');
exports.ContentHash = require('./contentHash');
exports.ContentLink = require('./contentLink');
exports.RunbookDraft = require('./runbookDraft');
exports.TrackedResource = require('./trackedResource');
exports.Runbook = require('./runbook');
exports.ModuleErrorInfo = require('./moduleErrorInfo');
exports.Module = require('./module');
exports.ContentSource = require('./contentSource');
exports.DscConfigurationParameter = require('./dscConfigurationParameter');
exports.DscConfiguration = require('./dscConfiguration');
exports.Sku = require('./sku');
exports.AutomationAccount = require('./automationAccount');
exports.OperationDisplay = require('./operationDisplay');
exports.Operation = require('./operation');
exports.AutomationAccountCreateOrUpdateParameters = require('./automationAccountCreateOrUpdateParameters');
exports.AutomationAccountUpdateParameters = require('./automationAccountUpdateParameters');
exports.CertificateUpdateParameters = require('./certificateUpdateParameters');
exports.CertificateCreateOrUpdateParameters = require('./certificateCreateOrUpdateParameters');
exports.ConnectionUpdateParameters = require('./connectionUpdateParameters');
exports.ConnectionCreateOrUpdateParameters = require('./connectionCreateOrUpdateParameters');
exports.FieldDefinition = require('./fieldDefinition');
exports.ConnectionType = require('./connectionType');
exports.ConnectionTypeCreateOrUpdateParameters = require('./connectionTypeCreateOrUpdateParameters');
exports.CredentialUpdateParameters = require('./credentialUpdateParameters');
exports.CredentialCreateOrUpdateParameters = require('./credentialCreateOrUpdateParameters');
exports.ActivityParameter = require('./activityParameter');
exports.ActivityParameterSet = require('./activityParameterSet');
exports.ActivityOutputType = require('./activityOutputType');
exports.Activity = require('./activity');
exports.AdvancedScheduleMonthlyOccurrence = require('./advancedScheduleMonthlyOccurrence');
exports.AdvancedSchedule = require('./advancedSchedule');
exports.AgentRegistrationKeys = require('./agentRegistrationKeys');
exports.AgentRegistration = require('./agentRegistration');
exports.AgentRegistrationRegenerateKeyParameter = require('./agentRegistrationRegenerateKeyParameter');
exports.DscCompilationJobCreateParameters = require('./dscCompilationJobCreateParameters');
exports.DscConfigurationCreateOrUpdateParameters = require('./dscConfigurationCreateOrUpdateParameters');
exports.DscConfigurationUpdateParameters = require('./dscConfigurationUpdateParameters');
exports.DscMetaConfiguration = require('./dscMetaConfiguration');
exports.DscNodeConfigurationCreateOrUpdateParameters = require('./dscNodeConfigurationCreateOrUpdateParameters');
exports.DscNodeConfigurationAssociationProperty = require('./dscNodeConfigurationAssociationProperty');
exports.DscNodeExtensionHandlerAssociationProperty = require('./dscNodeExtensionHandlerAssociationProperty');
exports.DscNodeUpdateParametersProperties = require('./dscNodeUpdateParametersProperties');
exports.DscNodeUpdateParameters = require('./dscNodeUpdateParameters');
exports.DscReportError = require('./dscReportError');
exports.DscReportResourceNavigation = require('./dscReportResourceNavigation');
exports.DscReportResource = require('./dscReportResource');
exports.DscNodeReport = require('./dscNodeReport');
exports.HybridRunbookWorker = require('./hybridRunbookWorker');
exports.RunAsCredentialAssociationProperty = require('./runAsCredentialAssociationProperty');
exports.HybridRunbookWorkerGroup = require('./hybridRunbookWorkerGroup');
exports.HybridRunbookWorkerGroupUpdateParameters = require('./hybridRunbookWorkerGroupUpdateParameters');
exports.Job = require('./job');
exports.JobCreateParameters = require('./jobCreateParameters');
exports.JobListResult = require('./jobListResult');
exports.ScheduleAssociationProperty = require('./scheduleAssociationProperty');
exports.JobScheduleCreateParameters = require('./jobScheduleCreateParameters');
exports.JobSchedule = require('./jobSchedule');
exports.JobStream = require('./jobStream');
exports.LinkedWorkspace = require('./linkedWorkspace');
exports.ModuleCreateOrUpdateParameters = require('./moduleCreateOrUpdateParameters');
exports.ModuleUpdateParameters = require('./moduleUpdateParameters');
exports.RunbookDraftUndoEditResult = require('./runbookDraftUndoEditResult');
exports.RunbookCreateOrUpdateParameters = require('./runbookCreateOrUpdateParameters');
exports.RunbookCreateOrUpdateDraftProperties = require('./runbookCreateOrUpdateDraftProperties');
exports.RunbookCreateOrUpdateDraftParameters = require('./runbookCreateOrUpdateDraftParameters');
exports.RunbookUpdateParameters = require('./runbookUpdateParameters');
exports.ScheduleCreateOrUpdateParameters = require('./scheduleCreateOrUpdateParameters');
exports.ScheduleProperties = require('./scheduleProperties');
exports.Schedule = require('./schedule');
exports.ScheduleUpdateParameters = require('./scheduleUpdateParameters');
exports.SubResource = require('./subResource');
exports.TestJobCreateParameters = require('./testJobCreateParameters');
exports.TestJob = require('./testJob');
exports.TypeField = require('./typeField');
exports.VariableCreateOrUpdateParameters = require('./variableCreateOrUpdateParameters');
exports.VariableUpdateParameters = require('./variableUpdateParameters');
exports.WebhookCreateOrUpdateParameters = require('./webhookCreateOrUpdateParameters');
exports.WebhookUpdateParameters = require('./webhookUpdateParameters');
exports.JobCollectionItem = require('./jobCollectionItem');
exports.WindowsProperties = require('./windowsProperties');
exports.LinuxProperties = require('./linuxProperties');
exports.UpdateConfiguration = require('./updateConfiguration');
exports.SoftwareUpdateConfiguration = require('./softwareUpdateConfiguration');
exports.CollectionItemUpdateConfiguration = require('./collectionItemUpdateConfiguration');
exports.SoftwareUpdateConfigurationCollectionItem = require('./softwareUpdateConfigurationCollectionItem');
exports.SoftwareUpdateConfigurationListResult = require('./softwareUpdateConfigurationListResult');
exports.UpdateConfigurationNavigation = require('./updateConfigurationNavigation');
exports.JobNavigation = require('./jobNavigation');
exports.SoftwareUpdateConfigurationRun = require('./softwareUpdateConfigurationRun');
exports.SoftwareUpdateConfigurationRunListResult = require('./softwareUpdateConfigurationRunListResult');
exports.SoftwareUpdateConfigurationMachineRun = require('./softwareUpdateConfigurationMachineRun');
exports.SoftwareUpdateConfigurationMachineRunListResult = require('./softwareUpdateConfigurationMachineRunListResult');
exports.SourceControlCreateOrUpdateParameters = require('./sourceControlCreateOrUpdateParameters');
exports.SourceControl = require('./sourceControl');
exports.SourceControlUpdateParameters = require('./sourceControlUpdateParameters');
exports.SourceControlSyncJob = require('./sourceControlSyncJob');
exports.SourceControlSyncJobByIdErrors = require('./sourceControlSyncJobByIdErrors');
exports.SourceControlSyncJobById = require('./sourceControlSyncJobById');
exports.DscNode = require('./dscNode');
exports.DscNodeConfiguration = require('./dscNodeConfiguration');
exports.DscNodeConfigurationCreateOrUpdateParametersProperties = require('./dscNodeConfigurationCreateOrUpdateParametersProperties');
exports.AutomationAccountListResult = require('./automationAccountListResult');
exports.OperationListResult = require('./operationListResult');
exports.StatisticsListResult = require('./statisticsListResult');
exports.UsageListResult = require('./usageListResult');
exports.KeyListResult = require('./keyListResult');
exports.CertificateListResult = require('./certificateListResult');
exports.ConnectionListResult = require('./connectionListResult');
exports.ConnectionTypeListResult = require('./connectionTypeListResult');
exports.CredentialListResult = require('./credentialListResult');
exports.DscConfigurationListResult = require('./dscConfigurationListResult');
exports.HybridRunbookWorkerGroupsListResult = require('./hybridRunbookWorkerGroupsListResult');
exports.JobScheduleListResult = require('./jobScheduleListResult');
exports.ActivityListResult = require('./activityListResult');
exports.ModuleListResult = require('./moduleListResult');
exports.TypeFieldListResult = require('./typeFieldListResult');
exports.RunbookListResult = require('./runbookListResult');
exports.JobStreamListResult = require('./jobStreamListResult');
exports.ScheduleListResult = require('./scheduleListResult');
exports.VariableListResult = require('./variableListResult');
exports.WebhookListResult = require('./webhookListResult');
exports.SourceControlListResult = require('./sourceControlListResult');
exports.SourceControlSyncJobListResult = require('./sourceControlSyncJobListResult');
exports.JobListResultV2 = require('./jobListResultV2');
exports.DscNodeListResult = require('./dscNodeListResult');
exports.DscNodeReportListResult = require('./dscNodeReportListResult');
exports.DscCompilationJobListResult = require('./dscCompilationJobListResult');
exports.DscNodeConfigurationListResult = require('./dscNodeConfigurationListResult');