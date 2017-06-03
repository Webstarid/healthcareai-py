Search.setIndex({docnames:["healthcareai","healthcareai.common","healthcareai.pipelines","healthcareai.tests","healthcareai.trained_models","index","modules"],envversion:51,filenames:["healthcareai.rst","healthcareai.common.rst","healthcareai.pipelines.rst","healthcareai.tests.rst","healthcareai.trained_models.rst","index.rst","modules.rst"],objects:{"":{healthcareai:[0,0,0,"-"]},"healthcareai.AdvancedSupervisedModelTrainer":{__init__:[0,2,1,""],ensemble_classification:[0,2,1,""],ensemble_regression:[0,2,1,""],feature_scaling:[0,2,1,""],is_classification:[0,3,1,""],is_regression:[0,3,1,""],knn:[0,2,1,""],linear_regression:[0,2,1,""],logistic_regression:[0,2,1,""],metrics:[0,2,1,""],random_forest:[0,2,1,""],random_forest_classifier:[0,2,1,""],random_forest_regressor:[0,2,1,""],train_test_split:[0,2,1,""],validate_classification:[0,2,1,""],validate_regression:[0,2,1,""],validate_score_metric_for_number_of_classes:[0,2,1,""]},"healthcareai.SupervisedModelTrainer":{__init__:[0,2,1,""],advanced_features:[0,3,1,""],clean_dataframe:[0,3,1,""],ensemble:[0,2,1,""],knn:[0,2,1,""],linear_regression:[0,2,1,""],logistic_regression:[0,2,1,""],random_forest:[0,2,1,""],random_forest_classification:[0,2,1,""],random_forest_regression:[0,2,1,""]},"healthcareai.advanced_supvervised_model_trainer":{AdvancedSupervisedModelTrainer:[0,1,1,""]},"healthcareai.advanced_supvervised_model_trainer.AdvancedSupervisedModelTrainer":{__init__:[0,2,1,""],ensemble_classification:[0,2,1,""],ensemble_regression:[0,2,1,""],feature_scaling:[0,2,1,""],is_classification:[0,3,1,""],is_regression:[0,3,1,""],knn:[0,2,1,""],linear_regression:[0,2,1,""],logistic_regression:[0,2,1,""],metrics:[0,2,1,""],random_forest:[0,2,1,""],random_forest_classifier:[0,2,1,""],random_forest_regressor:[0,2,1,""],train_test_split:[0,2,1,""],validate_classification:[0,2,1,""],validate_regression:[0,2,1,""],validate_score_metric_for_number_of_classes:[0,2,1,""]},"healthcareai.common":{azure_blob_storage_helper:[1,0,0,"-"],catalyst_sqlite_db_fixtures:[1,0,0,"-"],database_connections:[1,0,0,"-"],database_library_validators:[1,0,0,"-"],database_validators:[1,0,0,"-"],database_writers:[1,0,0,"-"],feature_availability_profiler:[1,0,0,"-"],file_io_utilities:[1,0,0,"-"],filters:[1,0,0,"-"],healthcareai_error:[1,0,0,"-"],helpers:[1,0,0,"-"],impact_coding:[1,0,0,"-"],model_eval:[1,0,0,"-"],predict:[1,0,0,"-"],randomized_search:[1,0,0,"-"],table_archiver:[1,0,0,"-"],top_factors:[1,0,0,"-"],transformers:[1,0,0,"-"]},"healthcareai.common.azure_blob_storage_helper":{AzureBlobStorageHelper:[1,1,1,""],AzureBlobStorageHelperError:[1,4,1,""]},"healthcareai.common.azure_blob_storage_helper.AzureBlobStorageHelper":{__init__:[1,2,1,""],create_container:[1,2,1,""],save_object_as_pickle:[1,2,1,""],save_text_blob:[1,2,1,""]},"healthcareai.common.catalyst_sqlite_db_fixtures":{drop_table:[1,5,1,""],is_table_empty:[1,5,1,""],setup_deploy_tables:[1,5,1,""]},"healthcareai.common.database_connections":{build_mssql_engine_using_trusted_connections:[1,5,1,""],build_mssql_trusted_connection_string:[1,5,1,""],build_mysql_connection_string:[1,5,1,""],build_sqlite_engine:[1,5,1,""],build_sqlite_in_memory_connection_string:[1,5,1,""]},"healthcareai.common.database_library_validators":{validate_pyodbc_is_loaded:[1,5,1,""],validate_sqlite3_is_loaded:[1,5,1,""]},"healthcareai.common.database_validators":{does_table_exist:[1,5,1,""],validate_destination_table_connection:[1,5,1,""],verify_sqlite_table_exists:[1,5,1,""]},"healthcareai.common.database_writers":{write_to_db_agnostic:[1,5,1,""]},"healthcareai.common.feature_availability_profiler":{count_nulls_in_date_range:[1,5,1,""],feature_availability_profiler:[1,5,1,""]},"healthcareai.common.file_io_utilities":{load_pickle_file:[1,5,1,""],load_saved_model:[1,5,1,""],save_dict_object_to_json:[1,5,1,""],save_object_as_pickle:[1,5,1,""]},"healthcareai.common.filters":{DataframeColumnRemover:[1,1,1,""],DataframeDateTimeColumnSuffixFilter:[1,1,1,""],DataframeNullValueFilter:[1,1,1,""],is_dataframe:[1,5,1,""],validate_dataframe_input:[1,5,1,""]},"healthcareai.common.filters.DataframeColumnRemover":{fit:[1,2,1,""],transform:[1,2,1,""]},"healthcareai.common.filters.DataframeDateTimeColumnSuffixFilter":{fit:[1,2,1,""],transform:[1,2,1,""]},"healthcareai.common.filters.DataframeNullValueFilter":{__init__:[1,2,1,""],fit:[1,2,1,""],transform:[1,2,1,""]},"healthcareai.common.healthcareai_error":{HealthcareAIError:[1,4,1,""]},"healthcareai.common.helpers":{calculate_random_forest_mtry_hyperparameter:[1,5,1,""],count_unique_elements_in_column:[1,5,1,""],extract_estimator_from_meta_estimator:[1,5,1,""],get_hyperparameters_from_meta_estimator:[1,5,1,""]},"healthcareai.common.impact_coding":{impact_coding_on_a_single_column:[1,5,1,""],impact_coding_on_many_columns:[1,5,1,""]},"healthcareai.common.model_eval":{calculate_binary_classification_metrics:[1,5,1,""],calculate_regression_metrics:[1,5,1,""],compute_pr:[1,5,1,""],compute_roc:[1,5,1,""],plot_random_forest_feature_importance:[1,5,1,""],pr_plot_from_thresholds:[1,5,1,""],roc_plot_from_thresholds:[1,5,1,""]},"healthcareai.common.predict":{predict_classification:[1,5,1,""],predict_classification_from_pickle:[1,5,1,""],predict_regression:[1,5,1,""],predict_regression_from_pickle:[1,5,1,""],validate_estimator:[1,5,1,""]},"healthcareai.common.randomized_search":{prepare_randomized_search:[1,5,1,""]},"healthcareai.common.table_archiver":{table_archiver:[1,5,1,""]},"healthcareai.common.top_factors":{descending_sort:[1,5,1,""],prepare_fit_model_for_factors:[1,5,1,""],top_k_features:[1,5,1,""]},"healthcareai.common.transformers":{DataFrameConvertColumnToNumeric:[1,1,1,""],DataFrameConvertTargetToBinary:[1,1,1,""],DataFrameCreateDummyVariables:[1,1,1,""],DataFrameImputer:[1,1,1,""],DataFrameOverSampling:[1,1,1,""],DataFrameUnderSampling:[1,1,1,""]},"healthcareai.common.transformers.DataFrameConvertColumnToNumeric":{fit:[1,2,1,""],transform:[1,2,1,""]},"healthcareai.common.transformers.DataFrameConvertTargetToBinary":{fit:[1,2,1,""],transform:[1,2,1,""]},"healthcareai.common.transformers.DataFrameCreateDummyVariables":{fit:[1,2,1,""],transform:[1,2,1,""]},"healthcareai.common.transformers.DataFrameImputer":{fit:[1,2,1,""],transform:[1,2,1,""]},"healthcareai.common.transformers.DataFrameOverSampling":{fit:[1,2,1,""],transform:[1,2,1,""]},"healthcareai.common.transformers.DataFrameUnderSampling":{fit:[1,2,1,""],transform:[1,2,1,""]},"healthcareai.pipelines":{data_preparation:[2,0,0,"-"]},"healthcareai.pipelines.data_preparation":{full_pipeline:[2,5,1,""]},"healthcareai.supervised_model_trainer":{SupervisedModelTrainer:[0,1,1,""],print_training_results:[0,5,1,""],print_training_timer:[0,5,1,""]},"healthcareai.supervised_model_trainer.SupervisedModelTrainer":{__init__:[0,2,1,""],advanced_features:[0,3,1,""],clean_dataframe:[0,3,1,""],ensemble:[0,2,1,""],knn:[0,2,1,""],linear_regression:[0,2,1,""],logistic_regression:[0,2,1,""],random_forest:[0,2,1,""],random_forest_classification:[0,2,1,""],random_forest_regression:[0,2,1,""]},"healthcareai.tests":{helpers:[3,0,0,"-"],test_advanced_trainer:[3,0,0,"-"],test_database_validation:[3,0,0,"-"],test_dataframe_filters:[3,0,0,"-"],test_dataframe_transformers:[3,0,0,"-"],test_feature_availability_profiler:[3,0,0,"-"],test_file_utilities:[3,0,0,"-"],test_impact_coding:[3,0,0,"-"],test_model_eval:[3,0,0,"-"],test_model_eval_helpers:[3,0,0,"-"],test_predict:[3,0,0,"-"],test_top_factors:[3,0,0,"-"],test_trained_supervised_model:[3,0,0,"-"],test_trainer:[3,0,0,"-"]},"healthcareai.tests.helpers":{assertBetween:[3,5,1,""],fixture:[3,5,1,""],load_factors_dataframe:[3,5,1,""],load_sample_dataframe:[3,5,1,""]},"healthcareai.tests.test_advanced_trainer":{TestAdvancedSupervisedModelTrainer:[3,1,1,""],TestHelpers:[3,1,1,""],TestLogisticRegression:[3,1,1,""],TestMetricValidation:[3,1,1,""],TestRandomForestClassification:[3,1,1,""]},"healthcareai.tests.test_advanced_trainer.TestAdvancedSupervisedModelTrainer":{setUpClass:[3,6,1,""],test_classification_trainer_linear_regression_raises_error:[3,2,1,""],test_raises_error_on_unsupported_model_type:[3,2,1,""],test_regression_trainer_knn_raises_error:[3,2,1,""],test_regression_trainer_logistic_regression_raises_error:[3,2,1,""],test_regression_trainer_random_forest_classification_raises_error:[3,2,1,""],test_validate_classification_raises_error_on_regression:[3,2,1,""],test_validate_regression_raises_error_on_classification:[3,2,1,""]},"healthcareai.tests.test_advanced_trainer.TestHelpers":{test_class_counter_on_binary:[3,2,1,""],test_class_counter_on_many:[3,2,1,""]},"healthcareai.tests.test_advanced_trainer.TestLogisticRegression":{setUp:[3,2,1,""],test_logistic_regression_no_tuning:[3,2,1,""]},"healthcareai.tests.test_advanced_trainer.TestMetricValidation":{setUp:[3,2,1,""],test_validate_score_metric_for_number_of_classes:[3,2,1,""]},"healthcareai.tests.test_advanced_trainer.TestRandomForestClassification":{setUp:[3,2,1,""],test_random_foarest_tuning_2_column_raises_error:[3,2,1,""],test_random_forest_no_tuning:[3,2,1,""],test_random_forest_tuning:[3,2,1,""]},"healthcareai.tests.test_database_validation":{TestValidateDestinationTableConnection:[3,1,1,""]},"healthcareai.tests.test_database_validation.TestValidateDestinationTableConnection":{test_raises_error_on_table_not_existing:[3,2,1,""],test_should_succeed:[3,2,1,""]},"healthcareai.tests.test_dataframe_filters":{TestDataframeColumnSuffixFilter:[3,1,1,""],TestDataframeGrainColumnDataFilter:[3,1,1,""],TestDataframeNullValueFilter:[3,1,1,""],TestIsDataframe:[3,1,1,""],TestValidationError:[3,1,1,""]},"healthcareai.tests.test_dataframe_filters.TestDataframeColumnSuffixFilter":{test_does_not_remove_lowercase_match:[3,2,1,""],test_raises_error_on_non_dataframe_inputs:[3,2,1,""],test_removes_long_character_match:[3,2,1,""],test_removes_nothing_when_it_finds_no_matches:[3,2,1,""],test_removes_three_character_match:[3,2,1,""]},"healthcareai.tests.test_dataframe_filters.TestDataframeGrainColumnDataFilter":{test_does_not_remove_lowercase_match:[3,2,1,""],test_raises_error_on_non_dataframe_inputs:[3,2,1,""],test_removes_list:[3,2,1,""],test_removes_match:[3,2,1,""],test_removes_nothing_when_it_finds_no_matches:[3,2,1,""]},"healthcareai.tests.test_dataframe_filters.TestDataframeNullValueFilter":{test_raises_error_on_non_dataframe_inputs:[3,2,1,""],test_removes_nothing_when_no_nulls_exist:[3,2,1,""],test_removes_row_with_all_nulls:[3,2,1,""],test_removes_row_with_single_null:[3,2,1,""]},"healthcareai.tests.test_dataframe_filters.TestIsDataframe":{test_is_dataframe:[3,2,1,""],test_is_not_dataframe:[3,2,1,""]},"healthcareai.tests.test_dataframe_filters.TestValidationError":{test_is_dataframe:[3,2,1,""],test_is_not_dataframe:[3,2,1,""]},"healthcareai.tests.test_dataframe_transformers":{TestDataFrameConvertColumnToNumeric:[3,1,1,""],TestDataFrameConvertTargetToBinary:[3,1,1,""],TestDataFrameCreateDummyVariables:[3,1,1,""],TestDataframeImputer:[3,1,1,""],TestDataframeOverSampler:[3,1,1,""],TestDataframeUnderSampler:[3,1,1,""]},"healthcareai.tests.test_dataframe_transformers.TestDataFrameConvertColumnToNumeric":{test_integer:[3,2,1,""],test_integer_strings:[3,2,1,""]},"healthcareai.tests.test_dataframe_transformers.TestDataFrameConvertTargetToBinary":{test_converts_y_n_for_classification:[3,2,1,""],test_does_nothing_on_regression:[3,2,1,""]},"healthcareai.tests.test_dataframe_transformers.TestDataFrameCreateDummyVariables":{test_dummies_for_binary_categorical:[3,2,1,""],test_dummies_for_trinary_categorical:[3,2,1,""]},"healthcareai.tests.test_dataframe_transformers.TestDataframeImputer":{test_imputation_false_returns_unmodified:[3,2,1,""],test_imputation_for_mean_of_numeric_and_mode_for_categorical:[3,2,1,""],test_imputation_removes_nans:[3,2,1,""],test_imputation_removes_nones:[3,2,1,""]},"healthcareai.tests.test_dataframe_transformers.TestDataframeOverSampler":{setUp:[3,2,1,""],test_returns_balanced_classes:[3,2,1,""],test_returns_dataframe:[3,2,1,""],test_returns_larger_dataframe:[3,2,1,""]},"healthcareai.tests.test_dataframe_transformers.TestDataframeUnderSampler":{setUp:[3,2,1,""],test_returns_balanced_classes:[3,2,1,""],test_returns_dataframe:[3,2,1,""],test_returns_smaller_dataframe:[3,2,1,""]},"healthcareai.tests.test_feature_availability_profiler":{TestFeatureAvailabilityProfiler:[3,1,1,""],TestFeatureAvailabilityProfilerError1:[3,1,1,""],TestFeatureAvailabilityProfilerError2:[3,1,1,""],TestFeatureAvailabilityProfilerError3:[3,1,1,""]},"healthcareai.tests.test_feature_availability_profiler.TestFeatureAvailabilityProfiler":{runTest:[3,2,1,""],setUp:[3,2,1,""],tearDown:[3,2,1,""]},"healthcareai.tests.test_feature_availability_profiler.TestFeatureAvailabilityProfilerError1":{runTest:[3,2,1,""],setUp:[3,2,1,""]},"healthcareai.tests.test_feature_availability_profiler.TestFeatureAvailabilityProfilerError2":{runTest:[3,2,1,""],setUp:[3,2,1,""]},"healthcareai.tests.test_feature_availability_profiler.TestFeatureAvailabilityProfilerError3":{runTest:[3,2,1,""],setUp:[3,2,1,""],tearDown:[3,2,1,""]},"healthcareai.tests.test_file_utilities":{TestFileIOUtilities:[3,1,1,""],TestPicklingErrors:[3,1,1,""]},"healthcareai.tests.test_file_utilities.TestFileIOUtilities":{setUp:[3,2,1,""],test_load_pickle_file_raises_error_on_non_string_filename:[3,2,1,""],test_load_saved_model_raises_error_on_non_string_filename:[3,2,1,""],test_save_dict_object_to_json_raises_error_on_non_string_filename:[3,2,1,""],test_save_object_as_pickle_raises_error_on_non_string_filename:[3,2,1,""]},"healthcareai.tests.test_file_utilities.TestPicklingErrors":{test_load_non_existent_file_should_raise_error:[3,2,1,""],test_load_non_existent_file_should_raise_error_correct_message:[3,2,1,""]},"healthcareai.tests.test_impact_coding":{TestImpactCoding:[3,1,1,""]},"healthcareai.tests.test_impact_coding.TestImpactCoding":{test_column_renaming:[3,2,1,""],test_unique_values:[3,2,1,""]},"healthcareai.tests.test_model_eval":{TestPR:[3,1,1,""],TestPlotRandomForestFeatureImportance:[3,1,1,""],TestROC:[3,1,1,""],TestValidation:[3,1,1,""]},"healthcareai.tests.test_model_eval.TestPR":{test_pr:[3,2,1,""]},"healthcareai.tests.test_model_eval.TestPlotRandomForestFeatureImportance":{test_raises_error_on_non_rf_estimator:[3,2,1,""]},"healthcareai.tests.test_model_eval.TestROC":{test_roc:[3,2,1,""]},"healthcareai.tests.test_model_eval.TestValidation":{test_different_length_predictions_and_labels_raises_error:[3,2,1,""],test_same_length_predictions_and_labels:[3,2,1,""]},"healthcareai.tests.test_model_eval_helpers":{TestCalculateRandomForestCalculateMTry:[3,1,1,""]},"healthcareai.tests.test_model_eval_helpers.TestCalculateRandomForestCalculateMTry":{test_bad_model_type_raises_error:[3,2,1,""],test_bad_model_type_raises_error_with_correct_message:[3,2,1,""],test_less_than_three_columns_raises_error:[3,2,1,""],test_less_than_three_columns_raises_error_with_correct_message:[3,2,1,""],test_negative_columns_raises_error_with_correct_message:[3,2,1,""],test_non_integer_columns_raises_error:[3,2,1,""],test_one_hundred_columns_classification:[3,2,1,""],test_one_hundred_columns_regression:[3,2,1,""],test_ten_columns_classification:[3,2,1,""],test_ten_columns_regression:[3,2,1,""],test_three_columns_classification:[3,2,1,""],test_three_columns_regression:[3,2,1,""]},"healthcareai.tests.test_predict":{TestPredictValidation:[3,1,1,""]},"healthcareai.tests.test_predict.TestPredictValidation":{test_predict_validation_error_message_on_non_estimator:[3,2,1,""],test_predict_validation_should_be_true_with_instance_of_scikit_estimator:[3,2,1,""],test_predict_validation_should_raise_error_on_non_estimator:[3,2,1,""]},"healthcareai.tests.test_top_factors":{TestTopFactors:[3,1,1,""]},"healthcareai.tests.test_top_factors.TestTopFactors":{setUpClass:[3,6,1,""],test_factors_are_correct_on_new_predictions:[3,2,1,""],test_factors_are_same_length_as_input:[3,2,1,""],test_factors_columns:[3,2,1,""],test_factors_return_is_dataframe:[3,2,1,""],test_top_k_factors_raises_error_on_more_features_than_model_has:[3,2,1,""]},"healthcareai.tests.test_trained_supervised_model":{TestTrainedSupervisedModel:[3,1,1,""]},"healthcareai.tests.test_trained_supervised_model.TestTrainedSupervisedModel":{setUpClass:[3,6,1,""],test_catalyst_are_same_length_as_input:[3,2,1,""],test_catalyst_columns:[3,2,1,""],test_catalyst_return_is_dataframe:[3,2,1,""],test_comparison_plotter_raises_error_on_bad_plot_type:[3,2,1,""],test_comparison_plotter_raises_error_on_list_with_non_tsm:[3,2,1,""],test_comparison_plotter_raises_error_on_single_non_tsm:[3,2,1,""],test_is_classification:[3,2,1,""],test_is_regression:[3,2,1,""],test_metrics_returns_object:[3,2,1,""],test_original_with_predictions_factors_are_same_length_as_input:[3,2,1,""],test_original_with_predictions_factors_columns:[3,2,1,""],test_original_with_predictions_factors_return_is_dataframe:[3,2,1,""],test_pr_returns_dict:[3,2,1,""],test_predictions_are_same_length_as_input:[3,2,1,""],test_predictions_is_dataframe:[3,2,1,""],test_predictions_with_factors_are_same_length_as_input:[3,2,1,""],test_predictions_with_factors_columns:[3,2,1,""],test_predictions_with_factors_return_is_dataframe:[3,2,1,""],test_prepare_and_subset_returns_dataframe:[3,2,1,""],test_roc_returns_dict:[3,2,1,""]},"healthcareai.tests.test_trainer":{TestSupervisedModelTrainer:[3,1,1,""],captured_output:[3,5,1,""]},"healthcareai.tests.test_trainer.TestSupervisedModelTrainer":{setUpClass:[3,6,1,""],test_ensemble_classification:[3,2,1,""],test_ensemble_regression:[3,2,1,""],test_knn:[3,2,1,""],test_linear_regression:[3,2,1,""],test_linear_regression_raises_error_on_missing_columns:[3,2,1,""],test_linear_regression_raises_error_on_roc_plot:[3,2,1,""],test_logistic_regression:[3,2,1,""],test_random_forest_classification:[3,2,1,""],test_random_forest_regression:[3,2,1,""]},"healthcareai.trained_models":{trained_supervised_model:[4,0,0,"-"]},"healthcareai.trained_models.trained_supervised_model":{TrainedSupervisedModel:[4,1,1,""],get_estimator_from_trained_supervised_model:[4,5,1,""],plot_rf_features_from_tsm:[4,5,1,""],tsm_classification_comparison_plots:[4,5,1,""]},"healthcareai.trained_models.trained_supervised_model.TrainedSupervisedModel":{__init__:[4,2,1,""],algorithm_name:[4,3,1,""],best_hyperparameters:[4,3,1,""],binary_classification_scores:[4,3,1,""],create_catalyst_dataframe:[4,2,1,""],is_classification:[4,3,1,""],is_regression:[4,3,1,""],make_factors:[4,2,1,""],make_original_with_predictions_and_factors:[4,2,1,""],make_predictions:[4,2,1,""],make_predictions_with_k_factors:[4,2,1,""],metrics:[4,3,1,""],model_type:[4,3,1,""],pr:[4,2,1,""],pr_plot:[4,2,1,""],predict_to_catalyst_sam:[4,2,1,""],predict_to_sqlite:[4,2,1,""],prepare_and_subset:[4,2,1,""],roc:[4,2,1,""],roc_plot:[4,2,1,""],save:[4,2,1,""],validate_classification:[4,2,1,""]},healthcareai:{AdvancedSupervisedModelTrainer:[0,1,1,""],SupervisedModelTrainer:[0,1,1,""],advanced_supvervised_model_trainer:[0,0,0,"-"],common:[1,0,0,"-"],pipelines:[2,0,0,"-"],supervised_model_trainer:[0,0,0,"-"],tests:[3,0,0,"-"],trained_models:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function","6":"py:classmethod"},terms:{"27t09":4,"30_regression_linearregress":4,"case":3,"class":[0,1,3,4],"default":[0,1,4],"float":0,"function":[1,3],"import":[0,1,4],"int":[0,1,4],"new":[1,4],"null":[0,1],"return":[0,1,3,4],"switch":[0,4],"true":[0,1,2,4],DTS:1,For:[0,4],The:[0,1,4],Useful:0,WILL:1,__init__:[0,1,4],absolut:3,account:1,account_kei:1,account_nam:1,actual:[3,4],addit:1,admiss:1,admit:[],admit_col_nam:1,admitdt:1,advanc:[0,2],advanced_featur:0,advanced_supvervised_model_train:6,advancedsupervisedmodeltrain:0,after:[0,1,3],alert:1,algorithm:[0,1,4],algorithm_nam:4,all:[0,1,4],allow:0,alreadi:1,also:1,amount:[0,3],analysi:4,ani:[0,1,4],api:1,appli:4,appropi:0,appropri:[0,1],archiv:1,archiveddt:1,archivedt:1,argument:1,around:0,arrai:[1,4],assert:3,assertbetween:3,assign:3,assum:1,auc:1,automat:1,avail:1,azur:1,azure_blob_storage_help:[0,6],azureblobstoragehelp:1,azureblobstoragehelpererror:1,azurehelp:1,back:1,base:[0,1,3,4],baseestim:[0,1,4],been:[1,4],befor:1,being:3,best:[0,1,4],best_hyperparamet:4,better:[0,1],between:3,binari:4,binary_classification_scor:4,blob:1,blob_nam:1,block:[1,4],bol:[],bool:[0,1,4],both:0,build:[1,2,4],build_mssql_engine_using_trusted_connect:1,build_mssql_trusted_connection_str:1,build_mysql_connection_str:1,build_sqlite_engin:1,build_sqlite_in_memory_connection_str:1,calcul:[0,1,4],calculate_binary_classification_metr:1,calculate_random_forest_mtry_hyperparamet:1,calculate_regression_metr:1,call:0,can:1,captur:3,captured_output:3,catalyst:[1,4],catalyst_sqlite_db_fixtur:[0,6],categor:[0,1],categori:3,chang:4,check:[0,1,4],choic:0,classif:[0,1,4],classifi:[0,1],classmethod:3,clean:[2,4],clean_datafram:0,code:1,coeffici:1,col:1,column:[0,1,3,4],column_nam:[1,4],columns_to_impact_cod:1,columns_to_remov:1,columns_to_scal:0,come:1,common:[0,6],commun:1,compar:0,complet:1,comput:1,compute_pr:1,compute_roc:1,connect:1,consol:[1,4],consolid:[0,4],contain:[0,1,3,4],container_nam:1,content:6,context:3,continu:1,conveni:[0,1],convert:1,copi:1,core:[0,1,4],correctli:3,correspond:1,count:1,count_nulls_in_date_rang:1,count_unique_elements_in_column:1,creat:[0,1,4],create_catalyst_datafram:4,create_contain:1,csv:3,curv:[1,4],custom:[0,2],cutoff:[1,4],data:[0,1,2,3,4],data_fram:1,data_prepar:[0,6],databas:[1,4],database_connect:[0,6],database_library_valid:[0,6],database_valid:[0,6],database_writ:[0,6],datafram:[0,1,3,4],dataframecolumnremov:1,dataframeconvertcolumntonumer:1,dataframeconverttargettobinari:1,dataframecreatedummyvari:1,dataframedatetimecolumnsuffixfilt:1,dataframeimput:1,dataframenullvaluefilt:1,dataframeoversampl:1,dataframeundersampl:1,dataset:1,date:1,db_name:1,deafault:0,debug:[1,4],delet:1,depend:1,descend:1,descending_sort:1,destin:[1,4],destination_t:1,detail:[1,4],dict:[0,1,4],dictionari:[0,1],directli:1,dirti:3,disk:1,displai:[0,1,4],distinct:3,doe:1,does_table_exist:1,doesn:1,done:1,drop:[0,1,3],drop_tabl:1,dtype:1,dummi:1,dure:0,each:[1,4],easi:[0,4],easili:1,edw:[1,4],either:4,empti:1,enabl:3,end:1,engin:1,ensembl:[0,1],ensemble_classif:0,ensemble_regress:0,enumer:1,equal:[1,3],error:[0,1,4],estim:[0,1,4],etc:1,exampl:[1,3,4],except:1,exclud:1,excluded_column:1,exist:1,expect:[3,4],explor:0,exsit:1,extract:4,extract_estimator_from_meta_estim:1,factor:4,fail:3,fakeyfakefakefakekey12312312:1,fakeyname123:1,fals:[0,1,4],featur:[0,1,4],feature_availability_profil:[0,6],feature_model:4,feature_nam:1,feature_sc:0,feautur:4,few:0,field:1,file:[1,3,4],file_io_util:[0,6],file_path:1,filenam:[1,4],filter:[0,2,6],first:[0,1,4],fit:[1,4],fit_pipelin:4,fixtur:3,forest:[0,1],form:1,format:[1,4],found:[0,1,4],fpr:1,frame:[0,1,4],frequent:1,from:[1,4],full_pipelin:2,gener:0,get:[0,1],get_estimator_from_trained_supervised_model:4,get_hyperparameters_from_meta_estim:1,given:[0,1,4],goe:1,grain:[0,4],grain_column:[0,1,2,4],graph:4,greater:1,grid:0,gridsearchcv:1,handl:1,has:[0,1,4],have:[0,1],health:[1,4],healthcar:0,healthcareai_error:[0,6],healthcareaierror:1,help:[0,1],helper:[0,6],here:1,hide:[],higher:1,holdout:4,html:1,http:1,hyper_paramet:1,hyperparamet:[0,1,4],hyperparameter_grid:[0,1],ignor:1,imag:1,imblearn:1,impact:[1,3],impact_cod:[0,6],impact_coding_on_a_single_column:1,impact_coding_on_many_column:1,impact_column:1,imput:[0,1,2],includ:[1,4],inclus:3,incom:4,index:5,indic:1,initi:1,input:[1,3],insert:1,instal:1,instanc:[0,1,4],instanti:1,integ:1,intend:0,intention:1,interf:4,is_classif:[0,4],is_datafram:1,is_regress:[0,4],is_table_empti:1,json:1,keep:1,kei:1,keyword:1,kneighborsclassifi:1,knn:0,know:1,label:[0,1,4],laod:1,last:1,last_load_col_nam:1,lastloaddt:1,lead:0,learn:[0,1,4],leav:0,length:1,level:4,light:[0,1],like:1,linear:[0,1,3,4],linear_model:1,linear_regress:0,list:[1,4],list_flag:1,load:[1,3],load_factors_datafram:3,load_pickle_fil:1,load_sample_datafram:3,load_saved_model:1,localhost:1,logic:1,logist:0,logistic_regress:0,longer:0,loss:1,magic:[0,4],mai:[0,1,2],main:[1,4],make:[0,1,4],make_factor:4,make_original_with_predictions_and_factor:4,make_predict:4,make_predictions_with_k_factor:4,manag:3,matrix:1,max:3,mean:[0,1],messag:[0,1],meta:[1,4],metadata:[1,4],method:[0,1,4],methodnam:3,metric:[0,1,4],metric_by_nam:4,min:3,minimum:1,miss:1,mode:[0,1],model:[0,1,3,4],model_by_nam:0,model_ev:[0,6],model_evalu:1,model_nam:0,model_typ:[0,1,2,4],modul:[5,6],more:[0,1],most:1,mssql:1,mtry:1,must:1,my_azur:1,my_filenam:1,my_new_contain:1,name:[0,1,3,4],ndarrai:1,need:1,neg_mean_squared_error:0,nice:[0,1],node:1,non_randomized_estimator_kwarg:1,none:[0,1,4],note:[1,2,4],num_data:[],number:[0,1,3,4],number_iteration_sampl:[0,1],number_of_column:1,number_top_featur:4,numer:[0,1],numpi:[1,4],object:[0,1,4],object_to_pickl:1,occur:1,one:[0,1,4],ones:0,onli:[0,1,4],oppos:1,optim:1,option:[0,1,4],org:1,origin:[0,4],other:1,otherwis:1,out:[0,4],output:[0,1,4],over:[0,1],overid:0,overrid:[0,4],oversampl:1,own:2,packag:6,page:5,pair:1,panda:[0,1,4],param:[1,4],paramet:[0,1,3,4],pass:[0,1],password:1,path:3,patient:1,per:4,perform:[0,1],pick:0,pickl:[1,4],pickle_filenam:1,pipelin:[0,1,4,6],pkl:[1,4],place:1,plot:[0,1,4],plot_flag:1,plot_random_forest_feature_import:1,plot_rf_features_from_tsm:4,plot_typ:4,plotflag:1,popul:1,possible_datafram:1,possible_estim:1,pr_plot:4,pr_plot_from_threshold:1,pr_thresholds_by_model:1,pre:1,precis:1,pred:1,predict:[0,3,4,6],predict_classif:1,predict_classification_from_pickl:1,predict_regress:1,predict_regression_from_pickl:1,predict_to_catalyst_sam:4,predict_to_sqlit:4,predicted_column:[0,1,2],predicted_column_nam:[1,4],predictedprobnbr:4,predictedvaluenbr:4,prediction_column:4,prediction_datafram:4,prediction_gener:4,prepar:[0,2,3,4],prepare_and_subset:4,prepare_fit_model_for_factor:1,prepare_randomized_search:1,prevent:4,print:[0,1,3,4],print_output:4,print_training_result:0,print_training_tim:0,probability_predict:1,probabl:4,problem:1,provid:0,put:0,pyodbc:1,python:1,quick:3,radomized_search:1,rais:[0,1,4],random:[0,1,4],random_forest:[0,1],random_forest_classif:0,random_forest_classifi:0,random_forest_regress:0,random_forest_regressor:0,random_se:[0,1],randomforestclassifi:1,randomized_search:[0,6],rang:1,rank:0,raw:[1,4],readi:1,reason:1,recal:1,record:1,recreat:1,regardless:[1,4],regress:[0,1,4],regressor:0,remov:1,report:0,repres:3,reproduc:0,requir:[0,1],result:1,right:0,riskscor:1,riskscorearch:1,roc:[1,4],roc_auc:0,roc_plot:4,roc_plot_from_threshold:1,roc_thresholds_by_model:1,roll:1,row:[0,1,3,4],run:[1,2,4],runtest:3,sam_123:1,same:1,sampl:[1,3],sampledata:3,save:[0,1,4],save_dict_object_to_json:1,save_object_as_pickl:1,save_plot:0,save_text_blob:1,scaler:0,schema:[1,4],scikit:[0,1,4],score:[0,1,4],scoring_metr:[0,1],search:[0,1,4,5],second:1,see:1,seed:0,self:3,sens:[0,4],sequenti:2,seri:1,server:[1,4],servic:1,set:[0,1,4],setup:3,setup_deploy_t:1,setupclass:3,sever:0,ship:1,should:1,show:0,silent:1,simpl:[0,1,4],simpli:0,simplifi:1,sinc:1,singl:[1,4],sklearn:[0,1,4],slower:1,sort:1,sourc:[0,1,2,3,4],source_t:1,space:[0,1],specif:[1,4],sphinx:[],split:[0,1],sqlalchemi:1,sqlite3:1,sqlite:[1,4],stabl:1,start:[0,1],start_timestamp:0,stat:0,stderr:3,stdout:3,storag:1,store:1,str:[0,1,3,4],string:[0,1,3,4],stuff:1,submodul:6,subpackag:6,subset:4,suffix:1,supervis:[0,4],supervised_model_train:6,supervisedmodeltrain:0,tabl:[1,4],table_archiv:[0,6],table_nam:1,take:[0,1],target:[0,1,4],target_column:1,teardown:3,test:[0,1,4,6],test_advanced_train:[0,6],test_bad_model_type_raises_error:3,test_bad_model_type_raises_error_with_correct_messag:3,test_catalyst_are_same_length_as_input:3,test_catalyst_column:3,test_catalyst_return_is_datafram:3,test_class_counter_on_binari:3,test_class_counter_on_mani:3,test_classification_trainer_linear_regression_raises_error:3,test_column_renam:3,test_comparison_plotter_raises_error_on_bad_plot_typ:3,test_comparison_plotter_raises_error_on_list_with_non_tsm:3,test_comparison_plotter_raises_error_on_single_non_tsm:3,test_converts_y_n_for_classif:3,test_database_valid:[0,6],test_dataframe_filt:[0,6],test_dataframe_transform:[0,6],test_different_length_predictions_and_labels_raises_error:3,test_does_not_remove_lowercase_match:3,test_does_nothing_on_regress:3,test_dummies_for_binary_categor:3,test_dummies_for_trinary_categor:3,test_ensemble_classif:3,test_ensemble_regress:3,test_factors_are_correct_on_new_predict:3,test_factors_are_same_length_as_input:3,test_factors_column:3,test_factors_return_is_datafram:3,test_feature_availability_profil:[0,6],test_file_util:[0,6],test_impact_cod:[0,6],test_imputation_false_returns_unmodifi:3,test_imputation_for_mean_of_numeric_and_mode_for_categor:3,test_imputation_removes_nan:3,test_imputation_removes_non:3,test_integ:3,test_integer_str:3,test_is_classif:3,test_is_datafram:3,test_is_not_datafram:3,test_is_regress:3,test_knn:3,test_less_than_three_columns_raises_error:3,test_less_than_three_columns_raises_error_with_correct_messag:3,test_linear_regress:3,test_linear_regression_raises_error_on_missing_column:3,test_linear_regression_raises_error_on_roc_plot:3,test_load_non_existent_file_should_raise_error:3,test_load_non_existent_file_should_raise_error_correct_messag:3,test_load_pickle_file_raises_error_on_non_string_filenam:3,test_load_saved_model_raises_error_on_non_string_filenam:3,test_logistic_regress:3,test_logistic_regression_no_tun:3,test_metrics_returns_object:3,test_model_ev:[0,6],test_model_eval_help:[0,6],test_negative_columns_raises_error_with_correct_messag:3,test_non_integer_columns_raises_error:3,test_one_hundred_columns_classif:3,test_one_hundred_columns_regress:3,test_original_with_predictions_factors_are_same_length_as_input:3,test_original_with_predictions_factors_column:3,test_original_with_predictions_factors_return_is_datafram:3,test_pr:3,test_pr_returns_dict:3,test_predict:[0,6],test_predict_validation_error_message_on_non_estim:3,test_predict_validation_should_be_true_with_instance_of_scikit_estim:3,test_predict_validation_should_raise_error_on_non_estim:3,test_predictions_are_same_length_as_input:3,test_predictions_is_datafram:3,test_predictions_with_factors_are_same_length_as_input:3,test_predictions_with_factors_column:3,test_predictions_with_factors_return_is_datafram:3,test_prepare_and_subset_returns_datafram:3,test_raises_error_on_non_dataframe_input:3,test_raises_error_on_non_rf_estim:3,test_raises_error_on_table_not_exist:3,test_raises_error_on_unsupported_model_typ:3,test_random_foarest_tuning_2_column_raises_error:3,test_random_forest_classif:3,test_random_forest_no_tun:3,test_random_forest_regress:3,test_random_forest_tun:3,test_regression_trainer_knn_raises_error:3,test_regression_trainer_logistic_regression_raises_error:3,test_regression_trainer_random_forest_classification_raises_error:3,test_removes_list:3,test_removes_long_character_match:3,test_removes_match:3,test_removes_nothing_when_it_finds_no_match:3,test_removes_nothing_when_no_nulls_exist:3,test_removes_row_with_all_nul:3,test_removes_row_with_single_nul:3,test_removes_three_character_match:3,test_returns_balanced_class:3,test_returns_datafram:3,test_returns_larger_datafram:3,test_returns_smaller_datafram:3,test_roc:3,test_roc_returns_dict:3,test_same_length_predictions_and_label:3,test_save_dict_object_to_json_raises_error_on_non_string_filenam:3,test_save_object_as_pickle_raises_error_on_non_string_filenam:3,test_set_actu:4,test_set_class_label:4,test_set_predict:4,test_should_succe:3,test_ten_columns_classif:3,test_ten_columns_regress:3,test_three_columns_classif:3,test_three_columns_regress:3,test_top_factor:[0,6],test_top_k_factors_raises_error_on_more_features_than_model_ha:3,test_train:[0,6],test_trained_supervised_model:[0,6],test_unique_valu:3,test_validate_classification_raises_error_on_regress:3,test_validate_regression_raises_error_on_classif:3,test_validate_score_metric_for_number_of_class:3,testadvancedsupervisedmodeltrain:3,testcalculaterandomforestcalculatemtri:3,testcas:3,testdataframecolumnsuffixfilt:3,testdataframeconvertcolumntonumer:3,testdataframeconverttargettobinari:3,testdataframecreatedummyvari:3,testdataframegraincolumndatafilt:3,testdataframeimput:3,testdataframenullvaluefilt:3,testdataframeoversampl:3,testdataframeundersampl:3,testfeatureavailabilityprofil:3,testfeatureavailabilityprofilererror1:3,testfeatureavailabilityprofilererror2:3,testfeatureavailabilityprofilererror3:3,testfileioutil:3,testhelp:3,testimpactcod:3,testisdatafram:3,testlogisticregress:3,testmetricvalid:3,testpicklingerror:3,testplotrandomforestfeatureimport:3,testpr:3,testpredictvalid:3,testrandomforestclassif:3,testroc:3,testsupervisedmodeltrain:3,testtopfactor:3,testtrainedsupervisedmodel:3,testvalid:3,testvalidatedestinationtableconnect:3,testvalidationerror:3,text:1,than:1,thei:1,them:4,thi:[0,1,4],thin:0,thing:3,though:1,thread:[1,4],threshold:1,through:[1,4],thrown:1,time:[0,1],timestamp:[0,1],timestamp_:4,timestamp_column_nam:1,todai:1,toolbox:0,top:[1,4],top_factor:[0,6],top_k_featur:1,tpr:1,train:[0,1,3,4],train_test_split:0,trained_estim:1,trained_model:[0,6],trained_model_by_nam:0,trained_rf_classifi:1,trained_sklearn_estim:[0,1],trained_supervised_model:[0,6],trainedsupervisedmodel:[0,1,4],trainer:[0,4],transact:1,transform:[0,2,4,6],transformermixin:1,tree:[0,1],trust:1,tsm_classification_comparison_plot:4,txt:1,type:[0,1,3,4],unchang:1,under:1,underli:0,undersampl:1,unexpect:4,uniqu:1,unit:0,unittest:3,upload:1,usag:1,use:[0,2,4],used:[0,1,4],user:[0,1,2],userid:1,using:[0,1],valid:1,validate_classif:[0,4],validate_dataframe_input:1,validate_destination_table_connect:1,validate_estim:1,validate_pyodbc_is_load:1,validate_regress:0,validate_score_metric_for_number_of_class:0,validate_sqlite3_is_load:1,valu:[0,1,3,4],variabl:1,variou:1,verbos:0,verbost:1,verifi:1,verify_sqlite_table_exist:1,wai:[0,1],want:[1,4],warn:1,weight:1,were:4,what:1,when:[0,1,4],whether:1,which:[0,1],wish:2,within:1,without:1,won:1,work:1,wrapper:0,write:1,write_to_db_agnost:1,x_test:1,x_train:[1,4],y_predict:4,y_test:[1,4],y_train:1,you:[1,4],your:[0,1]},titles:["healthcareai package","healthcareai.common package","healthcareai.pipelines package","healthcareai.tests package","healthcareai.trained_models package","Welcome to healthcare.ai&#8217;s documentation!","healthcareai"],titleterms:{advanced_supvervised_model_train:0,azure_blob_storage_help:1,catalyst_sqlite_db_fixtur:1,common:1,content:[0,1,2,3,4],data_prepar:2,database_connect:1,database_library_valid:1,database_valid:1,database_writ:1,document:5,feature_availability_profil:1,file_io_util:1,filter:1,healthcar:5,healthcareai:[0,1,2,3,4,6],healthcareai_error:1,helper:[1,3],impact_cod:1,indic:5,model_ev:1,modul:[0,1,2,3,4],packag:[0,1,2,3,4],pipelin:2,predict:1,randomized_search:1,submodul:[0,1,2,3,4],subpackag:0,supervised_model_train:0,tabl:5,table_archiv:1,test:3,test_advanced_train:3,test_database_valid:3,test_dataframe_filt:3,test_dataframe_transform:3,test_feature_availability_profil:3,test_file_util:3,test_impact_cod:3,test_model_ev:3,test_model_eval_help:3,test_predict:3,test_top_factor:3,test_train:3,test_trained_supervised_model:3,top_factor:1,trained_model:4,trained_supervised_model:4,transform:1,welcom:5}})