/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

export type ValueTypes = {
    /** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
	_eq?:string | null,
	_gt?:string | null,
	_gte?:string | null,
	/** does the column match the given case-insensitive pattern */
	_ilike?:string | null,
	_in?:string[],
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?:string | null,
	_is_null?:boolean | null,
	/** does the column match the given pattern */
	_like?:string | null,
	_lt?:string | null,
	_lte?:string | null,
	_neq?:string | null,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?:string | null,
	_nin?:string[],
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?:string | null,
	/** does the column NOT match the given pattern */
	_nlike?:string | null,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?:string | null,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?:string | null,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?:string | null,
	/** does the column match the given SQL regular expression */
	_similar?:string | null
};
	["jsonb"]:unknown;
	/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
["jsonb_comparison_exp"]: {
	/** is the column contained in the given json value */
	_contained_in?:ValueTypes["jsonb"] | null,
	/** does the column contain the given json value at the top level */
	_contains?:ValueTypes["jsonb"] | null,
	_eq?:ValueTypes["jsonb"] | null,
	_gt?:ValueTypes["jsonb"] | null,
	_gte?:ValueTypes["jsonb"] | null,
	/** does the string exist as a top-level key in the column */
	_has_key?:string | null,
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?:string[],
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?:string[],
	_in?:ValueTypes["jsonb"][],
	_is_null?:boolean | null,
	_lt?:ValueTypes["jsonb"] | null,
	_lte?:ValueTypes["jsonb"] | null,
	_neq?:ValueTypes["jsonb"] | null,
	_nin?:ValueTypes["jsonb"][]
};
	/** mutation root */
["mutation_root"]: AliasType<{
delete_rooms?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["rooms_bool_exp"]},ValueTypes["rooms_mutation_response"]],
delete_rooms_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["rooms"]],
delete_user_attendances?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["user_attendances_bool_exp"]},ValueTypes["user_attendances_mutation_response"]],
delete_user_attendances_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["user_attendances"]],
delete_users?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["users_bool_exp"]},ValueTypes["users_mutation_response"]],
delete_users_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["users"]],
insert_rooms?: [{	/** the rows to be inserted */
	objects:ValueTypes["rooms_insert_input"][],	/** upsert condition */
	on_conflict?:ValueTypes["rooms_on_conflict"] | null},ValueTypes["rooms_mutation_response"]],
insert_rooms_one?: [{	/** the row to be inserted */
	object:ValueTypes["rooms_insert_input"],	/** upsert condition */
	on_conflict?:ValueTypes["rooms_on_conflict"] | null},ValueTypes["rooms"]],
insert_user_attendances?: [{	/** the rows to be inserted */
	objects:ValueTypes["user_attendances_insert_input"][],	/** upsert condition */
	on_conflict?:ValueTypes["user_attendances_on_conflict"] | null},ValueTypes["user_attendances_mutation_response"]],
insert_user_attendances_one?: [{	/** the row to be inserted */
	object:ValueTypes["user_attendances_insert_input"],	/** upsert condition */
	on_conflict?:ValueTypes["user_attendances_on_conflict"] | null},ValueTypes["user_attendances"]],
insert_users?: [{	/** the rows to be inserted */
	objects:ValueTypes["users_insert_input"][],	/** upsert condition */
	on_conflict?:ValueTypes["users_on_conflict"] | null},ValueTypes["users_mutation_response"]],
insert_users_one?: [{	/** the row to be inserted */
	object:ValueTypes["users_insert_input"],	/** upsert condition */
	on_conflict?:ValueTypes["users_on_conflict"] | null},ValueTypes["users"]],
update_rooms?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?:ValueTypes["rooms_append_input"] | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?:ValueTypes["rooms_delete_at_path_input"] | null,	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?:ValueTypes["rooms_delete_elem_input"] | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?:ValueTypes["rooms_delete_key_input"] | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?:ValueTypes["rooms_prepend_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["rooms_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["rooms_bool_exp"]},ValueTypes["rooms_mutation_response"]],
update_rooms_by_pk?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?:ValueTypes["rooms_append_input"] | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?:ValueTypes["rooms_delete_at_path_input"] | null,	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?:ValueTypes["rooms_delete_elem_input"] | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?:ValueTypes["rooms_delete_key_input"] | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?:ValueTypes["rooms_prepend_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["rooms_set_input"] | null,	pk_columns:ValueTypes["rooms_pk_columns_input"]},ValueTypes["rooms"]],
update_user_attendances?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?:ValueTypes["user_attendances_append_input"] | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?:ValueTypes["user_attendances_delete_at_path_input"] | null,	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?:ValueTypes["user_attendances_delete_elem_input"] | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?:ValueTypes["user_attendances_delete_key_input"] | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?:ValueTypes["user_attendances_prepend_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["user_attendances_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["user_attendances_bool_exp"]},ValueTypes["user_attendances_mutation_response"]],
update_user_attendances_by_pk?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?:ValueTypes["user_attendances_append_input"] | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?:ValueTypes["user_attendances_delete_at_path_input"] | null,	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?:ValueTypes["user_attendances_delete_elem_input"] | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?:ValueTypes["user_attendances_delete_key_input"] | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?:ValueTypes["user_attendances_prepend_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["user_attendances_set_input"] | null,	pk_columns:ValueTypes["user_attendances_pk_columns_input"]},ValueTypes["user_attendances"]],
update_users?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["users_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["users_bool_exp"]},ValueTypes["users_mutation_response"]],
update_users_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["users_set_input"] | null,	pk_columns:ValueTypes["users_pk_columns_input"]},ValueTypes["users"]],
		__typename?: boolean
}>;
	/** column ordering options */
["order_by"]:order_by;
	["query_root"]: AliasType<{
rooms?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["rooms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["rooms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["rooms_bool_exp"] | null},ValueTypes["rooms"]],
rooms_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["rooms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["rooms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["rooms_bool_exp"] | null},ValueTypes["rooms_aggregate"]],
rooms_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["rooms"]],
user_attendances?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_attendances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_attendances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_attendances_bool_exp"] | null},ValueTypes["user_attendances"]],
user_attendances_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_attendances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_attendances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_attendances_bool_exp"] | null},ValueTypes["user_attendances_aggregate"]],
user_attendances_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["user_attendances"]],
users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users"]],
users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users_aggregate"]],
users_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["users"]],
		__typename?: boolean
}>;
	/** columns and relationships of "rooms" */
["rooms"]: AliasType<{
attendances?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_attendances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_attendances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_attendances_bool_exp"] | null},ValueTypes["user_attendances"]],
attendances_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_attendances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_attendances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_attendances_bool_exp"] | null},ValueTypes["user_attendances_aggregate"]],
	created_at?:boolean,
	id?:boolean,
	name?:boolean,
	number?:boolean,
state?: [{	/** JSON select path */
	path?:string | null},boolean],
	status?:boolean,
	updated_at?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "rooms" */
["rooms_aggregate"]: AliasType<{
	aggregate?:ValueTypes["rooms_aggregate_fields"],
	nodes?:ValueTypes["rooms"],
		__typename?: boolean
}>;
	/** aggregate fields of "rooms" */
["rooms_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["rooms_select_column"][],	distinct?:boolean | null},boolean],
	max?:ValueTypes["rooms_max_fields"],
	min?:ValueTypes["rooms_min_fields"],
		__typename?: boolean
}>;
	/** append existing jsonb value of filtered columns with new jsonb value */
["rooms_append_input"]: {
	state?:ValueTypes["jsonb"] | null
};
	/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
["rooms_bool_exp"]: {
	_and?:ValueTypes["rooms_bool_exp"][],
	_not?:ValueTypes["rooms_bool_exp"] | null,
	_or?:ValueTypes["rooms_bool_exp"][],
	attendances?:ValueTypes["user_attendances_bool_exp"] | null,
	created_at?:ValueTypes["timestamptz_comparison_exp"] | null,
	id?:ValueTypes["uuid_comparison_exp"] | null,
	name?:ValueTypes["String_comparison_exp"] | null,
	number?:ValueTypes["String_comparison_exp"] | null,
	state?:ValueTypes["jsonb_comparison_exp"] | null,
	status?:ValueTypes["String_comparison_exp"] | null,
	updated_at?:ValueTypes["timestamptz_comparison_exp"] | null
};
	/** unique or primary key constraints on table "rooms" */
["rooms_constraint"]:rooms_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["rooms_delete_at_path_input"]: {
	state?:string[]
};
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
["rooms_delete_elem_input"]: {
	state?:number | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["rooms_delete_key_input"]: {
	state?:string | null
};
	/** input type for inserting data into table "rooms" */
["rooms_insert_input"]: {
	attendances?:ValueTypes["user_attendances_arr_rel_insert_input"] | null,
	created_at?:ValueTypes["timestamptz"] | null,
	id?:ValueTypes["uuid"] | null,
	name?:string | null,
	number?:string | null,
	state?:ValueTypes["jsonb"] | null,
	status?:string | null,
	updated_at?:ValueTypes["timestamptz"] | null
};
	/** aggregate max on columns */
["rooms_max_fields"]: AliasType<{
	created_at?:boolean,
	id?:boolean,
	name?:boolean,
	number?:boolean,
	status?:boolean,
	updated_at?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["rooms_min_fields"]: AliasType<{
	created_at?:boolean,
	id?:boolean,
	name?:boolean,
	number?:boolean,
	status?:boolean,
	updated_at?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "rooms" */
["rooms_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["rooms"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "rooms" */
["rooms_obj_rel_insert_input"]: {
	data:ValueTypes["rooms_insert_input"],
	/** upsert condition */
	on_conflict?:ValueTypes["rooms_on_conflict"] | null
};
	/** on_conflict condition type for table "rooms" */
["rooms_on_conflict"]: {
	constraint:ValueTypes["rooms_constraint"],
	update_columns:ValueTypes["rooms_update_column"][],
	where?:ValueTypes["rooms_bool_exp"] | null
};
	/** Ordering options when selecting data from "rooms". */
["rooms_order_by"]: {
	attendances_aggregate?:ValueTypes["user_attendances_aggregate_order_by"] | null,
	created_at?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	name?:ValueTypes["order_by"] | null,
	number?:ValueTypes["order_by"] | null,
	state?:ValueTypes["order_by"] | null,
	status?:ValueTypes["order_by"] | null,
	updated_at?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: rooms */
["rooms_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["rooms_prepend_input"]: {
	state?:ValueTypes["jsonb"] | null
};
	/** select columns of table "rooms" */
["rooms_select_column"]:rooms_select_column;
	/** input type for updating data in table "rooms" */
["rooms_set_input"]: {
	created_at?:ValueTypes["timestamptz"] | null,
	id?:ValueTypes["uuid"] | null,
	name?:string | null,
	number?:string | null,
	state?:ValueTypes["jsonb"] | null,
	status?:string | null,
	updated_at?:ValueTypes["timestamptz"] | null
};
	/** update columns of table "rooms" */
["rooms_update_column"]:rooms_update_column;
	["subscription_root"]: AliasType<{
rooms?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["rooms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["rooms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["rooms_bool_exp"] | null},ValueTypes["rooms"]],
rooms_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["rooms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["rooms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["rooms_bool_exp"] | null},ValueTypes["rooms_aggregate"]],
rooms_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["rooms"]],
user_attendances?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_attendances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_attendances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_attendances_bool_exp"] | null},ValueTypes["user_attendances"]],
user_attendances_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_attendances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_attendances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_attendances_bool_exp"] | null},ValueTypes["user_attendances_aggregate"]],
user_attendances_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["user_attendances"]],
users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users"]],
users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users_aggregate"]],
users_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["users"]],
		__typename?: boolean
}>;
	["timestamptz"]:unknown;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: {
	_eq?:ValueTypes["timestamptz"] | null,
	_gt?:ValueTypes["timestamptz"] | null,
	_gte?:ValueTypes["timestamptz"] | null,
	_in?:ValueTypes["timestamptz"][],
	_is_null?:boolean | null,
	_lt?:ValueTypes["timestamptz"] | null,
	_lte?:ValueTypes["timestamptz"] | null,
	_neq?:ValueTypes["timestamptz"] | null,
	_nin?:ValueTypes["timestamptz"][]
};
	/** columns and relationships of "user_attendances" */
["user_attendances"]: AliasType<{
	created_at?:boolean,
	holding?:boolean,
	id?:boolean,
roles?: [{	/** JSON select path */
	path?:string | null},boolean],
	/** An object relationship */
	room?:ValueTypes["rooms"],
	room_id?:boolean,
	updated_at?:boolean,
	/** An object relationship */
	user?:ValueTypes["users"],
	user_id?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "user_attendances" */
["user_attendances_aggregate"]: AliasType<{
	aggregate?:ValueTypes["user_attendances_aggregate_fields"],
	nodes?:ValueTypes["user_attendances"],
		__typename?: boolean
}>;
	/** aggregate fields of "user_attendances" */
["user_attendances_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["user_attendances_select_column"][],	distinct?:boolean | null},boolean],
	max?:ValueTypes["user_attendances_max_fields"],
	min?:ValueTypes["user_attendances_min_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "user_attendances" */
["user_attendances_aggregate_order_by"]: {
	count?:ValueTypes["order_by"] | null,
	max?:ValueTypes["user_attendances_max_order_by"] | null,
	min?:ValueTypes["user_attendances_min_order_by"] | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["user_attendances_append_input"]: {
	roles?:ValueTypes["jsonb"] | null
};
	/** input type for inserting array relation for remote table "user_attendances" */
["user_attendances_arr_rel_insert_input"]: {
	data:ValueTypes["user_attendances_insert_input"][],
	/** upsert condition */
	on_conflict?:ValueTypes["user_attendances_on_conflict"] | null
};
	/** Boolean expression to filter rows from the table "user_attendances". All fields are combined with a logical 'AND'. */
["user_attendances_bool_exp"]: {
	_and?:ValueTypes["user_attendances_bool_exp"][],
	_not?:ValueTypes["user_attendances_bool_exp"] | null,
	_or?:ValueTypes["user_attendances_bool_exp"][],
	created_at?:ValueTypes["timestamptz_comparison_exp"] | null,
	holding?:ValueTypes["String_comparison_exp"] | null,
	id?:ValueTypes["uuid_comparison_exp"] | null,
	roles?:ValueTypes["jsonb_comparison_exp"] | null,
	room?:ValueTypes["rooms_bool_exp"] | null,
	room_id?:ValueTypes["uuid_comparison_exp"] | null,
	updated_at?:ValueTypes["timestamptz_comparison_exp"] | null,
	user?:ValueTypes["users_bool_exp"] | null,
	user_id?:ValueTypes["uuid_comparison_exp"] | null
};
	/** unique or primary key constraints on table "user_attendances" */
["user_attendances_constraint"]:user_attendances_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["user_attendances_delete_at_path_input"]: {
	roles?:string[]
};
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
["user_attendances_delete_elem_input"]: {
	roles?:number | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["user_attendances_delete_key_input"]: {
	roles?:string | null
};
	/** input type for inserting data into table "user_attendances" */
["user_attendances_insert_input"]: {
	created_at?:ValueTypes["timestamptz"] | null,
	holding?:string | null,
	id?:ValueTypes["uuid"] | null,
	roles?:ValueTypes["jsonb"] | null,
	room?:ValueTypes["rooms_obj_rel_insert_input"] | null,
	room_id?:ValueTypes["uuid"] | null,
	updated_at?:ValueTypes["timestamptz"] | null,
	user?:ValueTypes["users_obj_rel_insert_input"] | null,
	user_id?:ValueTypes["uuid"] | null
};
	/** aggregate max on columns */
["user_attendances_max_fields"]: AliasType<{
	created_at?:boolean,
	holding?:boolean,
	id?:boolean,
	room_id?:boolean,
	updated_at?:boolean,
	user_id?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "user_attendances" */
["user_attendances_max_order_by"]: {
	created_at?:ValueTypes["order_by"] | null,
	holding?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	room_id?:ValueTypes["order_by"] | null,
	updated_at?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate min on columns */
["user_attendances_min_fields"]: AliasType<{
	created_at?:boolean,
	holding?:boolean,
	id?:boolean,
	room_id?:boolean,
	updated_at?:boolean,
	user_id?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "user_attendances" */
["user_attendances_min_order_by"]: {
	created_at?:ValueTypes["order_by"] | null,
	holding?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	room_id?:ValueTypes["order_by"] | null,
	updated_at?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** response of any mutation on the table "user_attendances" */
["user_attendances_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["user_attendances"],
		__typename?: boolean
}>;
	/** on_conflict condition type for table "user_attendances" */
["user_attendances_on_conflict"]: {
	constraint:ValueTypes["user_attendances_constraint"],
	update_columns:ValueTypes["user_attendances_update_column"][],
	where?:ValueTypes["user_attendances_bool_exp"] | null
};
	/** Ordering options when selecting data from "user_attendances". */
["user_attendances_order_by"]: {
	created_at?:ValueTypes["order_by"] | null,
	holding?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	roles?:ValueTypes["order_by"] | null,
	room?:ValueTypes["rooms_order_by"] | null,
	room_id?:ValueTypes["order_by"] | null,
	updated_at?:ValueTypes["order_by"] | null,
	user?:ValueTypes["users_order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: user_attendances */
["user_attendances_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["user_attendances_prepend_input"]: {
	roles?:ValueTypes["jsonb"] | null
};
	/** select columns of table "user_attendances" */
["user_attendances_select_column"]:user_attendances_select_column;
	/** input type for updating data in table "user_attendances" */
["user_attendances_set_input"]: {
	created_at?:ValueTypes["timestamptz"] | null,
	holding?:string | null,
	id?:ValueTypes["uuid"] | null,
	roles?:ValueTypes["jsonb"] | null,
	room_id?:ValueTypes["uuid"] | null,
	updated_at?:ValueTypes["timestamptz"] | null,
	user_id?:ValueTypes["uuid"] | null
};
	/** update columns of table "user_attendances" */
["user_attendances_update_column"]:user_attendances_update_column;
	/** columns and relationships of "users" */
["users"]: AliasType<{
attendances?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_attendances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_attendances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_attendances_bool_exp"] | null},ValueTypes["user_attendances"]],
attendances_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_attendances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_attendances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_attendances_bool_exp"] | null},ValueTypes["user_attendances_aggregate"]],
	created_at?:boolean,
	id?:boolean,
	name?:boolean,
	updated_at?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "users" */
["users_aggregate"]: AliasType<{
	aggregate?:ValueTypes["users_aggregate_fields"],
	nodes?:ValueTypes["users"],
		__typename?: boolean
}>;
	/** aggregate fields of "users" */
["users_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["users_select_column"][],	distinct?:boolean | null},boolean],
	max?:ValueTypes["users_max_fields"],
	min?:ValueTypes["users_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
["users_bool_exp"]: {
	_and?:ValueTypes["users_bool_exp"][],
	_not?:ValueTypes["users_bool_exp"] | null,
	_or?:ValueTypes["users_bool_exp"][],
	attendances?:ValueTypes["user_attendances_bool_exp"] | null,
	created_at?:ValueTypes["timestamptz_comparison_exp"] | null,
	id?:ValueTypes["uuid_comparison_exp"] | null,
	name?:ValueTypes["String_comparison_exp"] | null,
	updated_at?:ValueTypes["timestamptz_comparison_exp"] | null
};
	/** unique or primary key constraints on table "users" */
["users_constraint"]:users_constraint;
	/** input type for inserting data into table "users" */
["users_insert_input"]: {
	attendances?:ValueTypes["user_attendances_arr_rel_insert_input"] | null,
	created_at?:ValueTypes["timestamptz"] | null,
	id?:ValueTypes["uuid"] | null,
	name?:string | null,
	updated_at?:ValueTypes["timestamptz"] | null
};
	/** aggregate max on columns */
["users_max_fields"]: AliasType<{
	created_at?:boolean,
	id?:boolean,
	name?:boolean,
	updated_at?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["users_min_fields"]: AliasType<{
	created_at?:boolean,
	id?:boolean,
	name?:boolean,
	updated_at?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "users" */
["users_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["users"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "users" */
["users_obj_rel_insert_input"]: {
	data:ValueTypes["users_insert_input"],
	/** upsert condition */
	on_conflict?:ValueTypes["users_on_conflict"] | null
};
	/** on_conflict condition type for table "users" */
["users_on_conflict"]: {
	constraint:ValueTypes["users_constraint"],
	update_columns:ValueTypes["users_update_column"][],
	where?:ValueTypes["users_bool_exp"] | null
};
	/** Ordering options when selecting data from "users". */
["users_order_by"]: {
	attendances_aggregate?:ValueTypes["user_attendances_aggregate_order_by"] | null,
	created_at?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	name?:ValueTypes["order_by"] | null,
	updated_at?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: users */
["users_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "users" */
["users_select_column"]:users_select_column;
	/** input type for updating data in table "users" */
["users_set_input"]: {
	created_at?:ValueTypes["timestamptz"] | null,
	id?:ValueTypes["uuid"] | null,
	name?:string | null,
	updated_at?:ValueTypes["timestamptz"] | null
};
	/** update columns of table "users" */
["users_update_column"]:users_update_column;
	["uuid"]:unknown;
	/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: {
	_eq?:ValueTypes["uuid"] | null,
	_gt?:ValueTypes["uuid"] | null,
	_gte?:ValueTypes["uuid"] | null,
	_in?:ValueTypes["uuid"][],
	_is_null?:boolean | null,
	_lt?:ValueTypes["uuid"] | null,
	_lte?:ValueTypes["uuid"] | null,
	_neq?:ValueTypes["uuid"] | null,
	_nin?:ValueTypes["uuid"][]
}
  }

export type ModelTypes = {
    /** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: GraphQLTypes["String_comparison_exp"];
	["jsonb"]:any;
	/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
["jsonb_comparison_exp"]: GraphQLTypes["jsonb_comparison_exp"];
	/** mutation root */
["mutation_root"]: {
		/** delete data from the table: "rooms" */
	delete_rooms?:ModelTypes["rooms_mutation_response"],
	/** delete single row from the table: "rooms" */
	delete_rooms_by_pk?:ModelTypes["rooms"],
	/** delete data from the table: "user_attendances" */
	delete_user_attendances?:ModelTypes["user_attendances_mutation_response"],
	/** delete single row from the table: "user_attendances" */
	delete_user_attendances_by_pk?:ModelTypes["user_attendances"],
	/** delete data from the table: "users" */
	delete_users?:ModelTypes["users_mutation_response"],
	/** delete single row from the table: "users" */
	delete_users_by_pk?:ModelTypes["users"],
	/** insert data into the table: "rooms" */
	insert_rooms?:ModelTypes["rooms_mutation_response"],
	/** insert a single row into the table: "rooms" */
	insert_rooms_one?:ModelTypes["rooms"],
	/** insert data into the table: "user_attendances" */
	insert_user_attendances?:ModelTypes["user_attendances_mutation_response"],
	/** insert a single row into the table: "user_attendances" */
	insert_user_attendances_one?:ModelTypes["user_attendances"],
	/** insert data into the table: "users" */
	insert_users?:ModelTypes["users_mutation_response"],
	/** insert a single row into the table: "users" */
	insert_users_one?:ModelTypes["users"],
	/** update data of the table: "rooms" */
	update_rooms?:ModelTypes["rooms_mutation_response"],
	/** update single row of the table: "rooms" */
	update_rooms_by_pk?:ModelTypes["rooms"],
	/** update data of the table: "user_attendances" */
	update_user_attendances?:ModelTypes["user_attendances_mutation_response"],
	/** update single row of the table: "user_attendances" */
	update_user_attendances_by_pk?:ModelTypes["user_attendances"],
	/** update data of the table: "users" */
	update_users?:ModelTypes["users_mutation_response"],
	/** update single row of the table: "users" */
	update_users_by_pk?:ModelTypes["users"]
};
	/** column ordering options */
["order_by"]: GraphQLTypes["order_by"];
	["query_root"]: {
		/** fetch data from the table: "rooms" */
	rooms:ModelTypes["rooms"][],
	/** fetch aggregated fields from the table: "rooms" */
	rooms_aggregate:ModelTypes["rooms_aggregate"],
	/** fetch data from the table: "rooms" using primary key columns */
	rooms_by_pk?:ModelTypes["rooms"],
	/** fetch data from the table: "user_attendances" */
	user_attendances:ModelTypes["user_attendances"][],
	/** fetch aggregated fields from the table: "user_attendances" */
	user_attendances_aggregate:ModelTypes["user_attendances_aggregate"],
	/** fetch data from the table: "user_attendances" using primary key columns */
	user_attendances_by_pk?:ModelTypes["user_attendances"],
	/** fetch data from the table: "users" */
	users:ModelTypes["users"][],
	/** fetch aggregated fields from the table: "users" */
	users_aggregate:ModelTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?:ModelTypes["users"]
};
	/** columns and relationships of "rooms" */
["rooms"]: {
		/** An array relationship */
	attendances:ModelTypes["user_attendances"][],
	/** An aggregate relationship */
	attendances_aggregate:ModelTypes["user_attendances_aggregate"],
	created_at:ModelTypes["timestamptz"],
	id:ModelTypes["uuid"],
	name:string,
	number:string,
	state?:ModelTypes["jsonb"],
	status?:string,
	updated_at:ModelTypes["timestamptz"]
};
	/** aggregated selection of "rooms" */
["rooms_aggregate"]: {
		aggregate?:ModelTypes["rooms_aggregate_fields"],
	nodes:ModelTypes["rooms"][]
};
	/** aggregate fields of "rooms" */
["rooms_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["rooms_max_fields"],
	min?:ModelTypes["rooms_min_fields"]
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["rooms_append_input"]: GraphQLTypes["rooms_append_input"];
	/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
["rooms_bool_exp"]: GraphQLTypes["rooms_bool_exp"];
	/** unique or primary key constraints on table "rooms" */
["rooms_constraint"]: GraphQLTypes["rooms_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["rooms_delete_at_path_input"]: GraphQLTypes["rooms_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
["rooms_delete_elem_input"]: GraphQLTypes["rooms_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["rooms_delete_key_input"]: GraphQLTypes["rooms_delete_key_input"];
	/** input type for inserting data into table "rooms" */
["rooms_insert_input"]: GraphQLTypes["rooms_insert_input"];
	/** aggregate max on columns */
["rooms_max_fields"]: {
		created_at?:ModelTypes["timestamptz"],
	id?:ModelTypes["uuid"],
	name?:string,
	number?:string,
	status?:string,
	updated_at?:ModelTypes["timestamptz"]
};
	/** aggregate min on columns */
["rooms_min_fields"]: {
		created_at?:ModelTypes["timestamptz"],
	id?:ModelTypes["uuid"],
	name?:string,
	number?:string,
	status?:string,
	updated_at?:ModelTypes["timestamptz"]
};
	/** response of any mutation on the table "rooms" */
["rooms_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["rooms"][]
};
	/** input type for inserting object relation for remote table "rooms" */
["rooms_obj_rel_insert_input"]: GraphQLTypes["rooms_obj_rel_insert_input"];
	/** on_conflict condition type for table "rooms" */
["rooms_on_conflict"]: GraphQLTypes["rooms_on_conflict"];
	/** Ordering options when selecting data from "rooms". */
["rooms_order_by"]: GraphQLTypes["rooms_order_by"];
	/** primary key columns input for table: rooms */
["rooms_pk_columns_input"]: GraphQLTypes["rooms_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["rooms_prepend_input"]: GraphQLTypes["rooms_prepend_input"];
	/** select columns of table "rooms" */
["rooms_select_column"]: GraphQLTypes["rooms_select_column"];
	/** input type for updating data in table "rooms" */
["rooms_set_input"]: GraphQLTypes["rooms_set_input"];
	/** update columns of table "rooms" */
["rooms_update_column"]: GraphQLTypes["rooms_update_column"];
	["subscription_root"]: {
		/** fetch data from the table: "rooms" */
	rooms:ModelTypes["rooms"][],
	/** fetch aggregated fields from the table: "rooms" */
	rooms_aggregate:ModelTypes["rooms_aggregate"],
	/** fetch data from the table: "rooms" using primary key columns */
	rooms_by_pk?:ModelTypes["rooms"],
	/** fetch data from the table: "user_attendances" */
	user_attendances:ModelTypes["user_attendances"][],
	/** fetch aggregated fields from the table: "user_attendances" */
	user_attendances_aggregate:ModelTypes["user_attendances_aggregate"],
	/** fetch data from the table: "user_attendances" using primary key columns */
	user_attendances_by_pk?:ModelTypes["user_attendances"],
	/** fetch data from the table: "users" */
	users:ModelTypes["users"][],
	/** fetch aggregated fields from the table: "users" */
	users_aggregate:ModelTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?:ModelTypes["users"]
};
	["timestamptz"]:any;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: GraphQLTypes["timestamptz_comparison_exp"];
	/** columns and relationships of "user_attendances" */
["user_attendances"]: {
		created_at:ModelTypes["timestamptz"],
	holding?:string,
	id:ModelTypes["uuid"],
	roles?:ModelTypes["jsonb"],
	/** An object relationship */
	room?:ModelTypes["rooms"],
	room_id:ModelTypes["uuid"],
	updated_at:ModelTypes["timestamptz"],
	/** An object relationship */
	user?:ModelTypes["users"],
	user_id:ModelTypes["uuid"]
};
	/** aggregated selection of "user_attendances" */
["user_attendances_aggregate"]: {
		aggregate?:ModelTypes["user_attendances_aggregate_fields"],
	nodes:ModelTypes["user_attendances"][]
};
	/** aggregate fields of "user_attendances" */
["user_attendances_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["user_attendances_max_fields"],
	min?:ModelTypes["user_attendances_min_fields"]
};
	/** order by aggregate values of table "user_attendances" */
["user_attendances_aggregate_order_by"]: GraphQLTypes["user_attendances_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["user_attendances_append_input"]: GraphQLTypes["user_attendances_append_input"];
	/** input type for inserting array relation for remote table "user_attendances" */
["user_attendances_arr_rel_insert_input"]: GraphQLTypes["user_attendances_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "user_attendances". All fields are combined with a logical 'AND'. */
["user_attendances_bool_exp"]: GraphQLTypes["user_attendances_bool_exp"];
	/** unique or primary key constraints on table "user_attendances" */
["user_attendances_constraint"]: GraphQLTypes["user_attendances_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["user_attendances_delete_at_path_input"]: GraphQLTypes["user_attendances_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
["user_attendances_delete_elem_input"]: GraphQLTypes["user_attendances_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["user_attendances_delete_key_input"]: GraphQLTypes["user_attendances_delete_key_input"];
	/** input type for inserting data into table "user_attendances" */
["user_attendances_insert_input"]: GraphQLTypes["user_attendances_insert_input"];
	/** aggregate max on columns */
["user_attendances_max_fields"]: {
		created_at?:ModelTypes["timestamptz"],
	holding?:string,
	id?:ModelTypes["uuid"],
	room_id?:ModelTypes["uuid"],
	updated_at?:ModelTypes["timestamptz"],
	user_id?:ModelTypes["uuid"]
};
	/** order by max() on columns of table "user_attendances" */
["user_attendances_max_order_by"]: GraphQLTypes["user_attendances_max_order_by"];
	/** aggregate min on columns */
["user_attendances_min_fields"]: {
		created_at?:ModelTypes["timestamptz"],
	holding?:string,
	id?:ModelTypes["uuid"],
	room_id?:ModelTypes["uuid"],
	updated_at?:ModelTypes["timestamptz"],
	user_id?:ModelTypes["uuid"]
};
	/** order by min() on columns of table "user_attendances" */
["user_attendances_min_order_by"]: GraphQLTypes["user_attendances_min_order_by"];
	/** response of any mutation on the table "user_attendances" */
["user_attendances_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["user_attendances"][]
};
	/** on_conflict condition type for table "user_attendances" */
["user_attendances_on_conflict"]: GraphQLTypes["user_attendances_on_conflict"];
	/** Ordering options when selecting data from "user_attendances". */
["user_attendances_order_by"]: GraphQLTypes["user_attendances_order_by"];
	/** primary key columns input for table: user_attendances */
["user_attendances_pk_columns_input"]: GraphQLTypes["user_attendances_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["user_attendances_prepend_input"]: GraphQLTypes["user_attendances_prepend_input"];
	/** select columns of table "user_attendances" */
["user_attendances_select_column"]: GraphQLTypes["user_attendances_select_column"];
	/** input type for updating data in table "user_attendances" */
["user_attendances_set_input"]: GraphQLTypes["user_attendances_set_input"];
	/** update columns of table "user_attendances" */
["user_attendances_update_column"]: GraphQLTypes["user_attendances_update_column"];
	/** columns and relationships of "users" */
["users"]: {
		/** An array relationship */
	attendances:ModelTypes["user_attendances"][],
	/** An aggregate relationship */
	attendances_aggregate:ModelTypes["user_attendances_aggregate"],
	created_at:ModelTypes["timestamptz"],
	id:ModelTypes["uuid"],
	name:string,
	updated_at:ModelTypes["timestamptz"]
};
	/** aggregated selection of "users" */
["users_aggregate"]: {
		aggregate?:ModelTypes["users_aggregate_fields"],
	nodes:ModelTypes["users"][]
};
	/** aggregate fields of "users" */
["users_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["users_max_fields"],
	min?:ModelTypes["users_min_fields"]
};
	/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
["users_bool_exp"]: GraphQLTypes["users_bool_exp"];
	/** unique or primary key constraints on table "users" */
["users_constraint"]: GraphQLTypes["users_constraint"];
	/** input type for inserting data into table "users" */
["users_insert_input"]: GraphQLTypes["users_insert_input"];
	/** aggregate max on columns */
["users_max_fields"]: {
		created_at?:ModelTypes["timestamptz"],
	id?:ModelTypes["uuid"],
	name?:string,
	updated_at?:ModelTypes["timestamptz"]
};
	/** aggregate min on columns */
["users_min_fields"]: {
		created_at?:ModelTypes["timestamptz"],
	id?:ModelTypes["uuid"],
	name?:string,
	updated_at?:ModelTypes["timestamptz"]
};
	/** response of any mutation on the table "users" */
["users_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["users"][]
};
	/** input type for inserting object relation for remote table "users" */
["users_obj_rel_insert_input"]: GraphQLTypes["users_obj_rel_insert_input"];
	/** on_conflict condition type for table "users" */
["users_on_conflict"]: GraphQLTypes["users_on_conflict"];
	/** Ordering options when selecting data from "users". */
["users_order_by"]: GraphQLTypes["users_order_by"];
	/** primary key columns input for table: users */
["users_pk_columns_input"]: GraphQLTypes["users_pk_columns_input"];
	/** select columns of table "users" */
["users_select_column"]: GraphQLTypes["users_select_column"];
	/** input type for updating data in table "users" */
["users_set_input"]: GraphQLTypes["users_set_input"];
	/** update columns of table "users" */
["users_update_column"]: GraphQLTypes["users_update_column"];
	["uuid"]:any;
	/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: GraphQLTypes["uuid_comparison_exp"]
    }

export type GraphQLTypes = {
    /** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
		_eq?: string,
	_gt?: string,
	_gte?: string,
	/** does the column match the given case-insensitive pattern */
	_ilike?: string,
	_in?: Array<string>,
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: string,
	_is_null?: boolean,
	/** does the column match the given pattern */
	_like?: string,
	_lt?: string,
	_lte?: string,
	_neq?: string,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: string,
	_nin?: Array<string>,
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: string,
	/** does the column NOT match the given pattern */
	_nlike?: string,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: string,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: string,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: string,
	/** does the column match the given SQL regular expression */
	_similar?: string
};
	["jsonb"]:any;
	/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
["jsonb_comparison_exp"]: {
		/** is the column contained in the given json value */
	_contained_in?: GraphQLTypes["jsonb"],
	/** does the column contain the given json value at the top level */
	_contains?: GraphQLTypes["jsonb"],
	_eq?: GraphQLTypes["jsonb"],
	_gt?: GraphQLTypes["jsonb"],
	_gte?: GraphQLTypes["jsonb"],
	/** does the string exist as a top-level key in the column */
	_has_key?: string,
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?: Array<string>,
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?: Array<string>,
	_in?: Array<GraphQLTypes["jsonb"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["jsonb"],
	_lte?: GraphQLTypes["jsonb"],
	_neq?: GraphQLTypes["jsonb"],
	_nin?: Array<GraphQLTypes["jsonb"]>
};
	/** mutation root */
["mutation_root"]: {
	__typename: "mutation_root",
	/** delete data from the table: "rooms" */
	delete_rooms?: GraphQLTypes["rooms_mutation_response"],
	/** delete single row from the table: "rooms" */
	delete_rooms_by_pk?: GraphQLTypes["rooms"],
	/** delete data from the table: "user_attendances" */
	delete_user_attendances?: GraphQLTypes["user_attendances_mutation_response"],
	/** delete single row from the table: "user_attendances" */
	delete_user_attendances_by_pk?: GraphQLTypes["user_attendances"],
	/** delete data from the table: "users" */
	delete_users?: GraphQLTypes["users_mutation_response"],
	/** delete single row from the table: "users" */
	delete_users_by_pk?: GraphQLTypes["users"],
	/** insert data into the table: "rooms" */
	insert_rooms?: GraphQLTypes["rooms_mutation_response"],
	/** insert a single row into the table: "rooms" */
	insert_rooms_one?: GraphQLTypes["rooms"],
	/** insert data into the table: "user_attendances" */
	insert_user_attendances?: GraphQLTypes["user_attendances_mutation_response"],
	/** insert a single row into the table: "user_attendances" */
	insert_user_attendances_one?: GraphQLTypes["user_attendances"],
	/** insert data into the table: "users" */
	insert_users?: GraphQLTypes["users_mutation_response"],
	/** insert a single row into the table: "users" */
	insert_users_one?: GraphQLTypes["users"],
	/** update data of the table: "rooms" */
	update_rooms?: GraphQLTypes["rooms_mutation_response"],
	/** update single row of the table: "rooms" */
	update_rooms_by_pk?: GraphQLTypes["rooms"],
	/** update data of the table: "user_attendances" */
	update_user_attendances?: GraphQLTypes["user_attendances_mutation_response"],
	/** update single row of the table: "user_attendances" */
	update_user_attendances_by_pk?: GraphQLTypes["user_attendances"],
	/** update data of the table: "users" */
	update_users?: GraphQLTypes["users_mutation_response"],
	/** update single row of the table: "users" */
	update_users_by_pk?: GraphQLTypes["users"]
};
	/** column ordering options */
["order_by"]: order_by;
	["query_root"]: {
	__typename: "query_root",
	/** fetch data from the table: "rooms" */
	rooms: Array<GraphQLTypes["rooms"]>,
	/** fetch aggregated fields from the table: "rooms" */
	rooms_aggregate: GraphQLTypes["rooms_aggregate"],
	/** fetch data from the table: "rooms" using primary key columns */
	rooms_by_pk?: GraphQLTypes["rooms"],
	/** fetch data from the table: "user_attendances" */
	user_attendances: Array<GraphQLTypes["user_attendances"]>,
	/** fetch aggregated fields from the table: "user_attendances" */
	user_attendances_aggregate: GraphQLTypes["user_attendances_aggregate"],
	/** fetch data from the table: "user_attendances" using primary key columns */
	user_attendances_by_pk?: GraphQLTypes["user_attendances"],
	/** fetch data from the table: "users" */
	users: Array<GraphQLTypes["users"]>,
	/** fetch aggregated fields from the table: "users" */
	users_aggregate: GraphQLTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?: GraphQLTypes["users"]
};
	/** columns and relationships of "rooms" */
["rooms"]: {
	__typename: "rooms",
	/** An array relationship */
	attendances: Array<GraphQLTypes["user_attendances"]>,
	/** An aggregate relationship */
	attendances_aggregate: GraphQLTypes["user_attendances_aggregate"],
	created_at: GraphQLTypes["timestamptz"],
	id: GraphQLTypes["uuid"],
	name: string,
	number: string,
	state?: GraphQLTypes["jsonb"],
	status?: string,
	updated_at: GraphQLTypes["timestamptz"]
};
	/** aggregated selection of "rooms" */
["rooms_aggregate"]: {
	__typename: "rooms_aggregate",
	aggregate?: GraphQLTypes["rooms_aggregate_fields"],
	nodes: Array<GraphQLTypes["rooms"]>
};
	/** aggregate fields of "rooms" */
["rooms_aggregate_fields"]: {
	__typename: "rooms_aggregate_fields",
	count: number,
	max?: GraphQLTypes["rooms_max_fields"],
	min?: GraphQLTypes["rooms_min_fields"]
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["rooms_append_input"]: {
		state?: GraphQLTypes["jsonb"]
};
	/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
["rooms_bool_exp"]: {
		_and?: Array<GraphQLTypes["rooms_bool_exp"]>,
	_not?: GraphQLTypes["rooms_bool_exp"],
	_or?: Array<GraphQLTypes["rooms_bool_exp"]>,
	attendances?: GraphQLTypes["user_attendances_bool_exp"],
	created_at?: GraphQLTypes["timestamptz_comparison_exp"],
	id?: GraphQLTypes["uuid_comparison_exp"],
	name?: GraphQLTypes["String_comparison_exp"],
	number?: GraphQLTypes["String_comparison_exp"],
	state?: GraphQLTypes["jsonb_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["timestamptz_comparison_exp"]
};
	/** unique or primary key constraints on table "rooms" */
["rooms_constraint"]: rooms_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["rooms_delete_at_path_input"]: {
		state?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
["rooms_delete_elem_input"]: {
		state?: number
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["rooms_delete_key_input"]: {
		state?: string
};
	/** input type for inserting data into table "rooms" */
["rooms_insert_input"]: {
		attendances?: GraphQLTypes["user_attendances_arr_rel_insert_input"],
	created_at?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string,
	number?: string,
	state?: GraphQLTypes["jsonb"],
	status?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** aggregate max on columns */
["rooms_max_fields"]: {
	__typename: "rooms_max_fields",
	created_at?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string,
	number?: string,
	status?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** aggregate min on columns */
["rooms_min_fields"]: {
	__typename: "rooms_min_fields",
	created_at?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string,
	number?: string,
	status?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** response of any mutation on the table "rooms" */
["rooms_mutation_response"]: {
	__typename: "rooms_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["rooms"]>
};
	/** input type for inserting object relation for remote table "rooms" */
["rooms_obj_rel_insert_input"]: {
		data: GraphQLTypes["rooms_insert_input"],
	/** upsert condition */
	on_conflict?: GraphQLTypes["rooms_on_conflict"]
};
	/** on_conflict condition type for table "rooms" */
["rooms_on_conflict"]: {
		constraint: GraphQLTypes["rooms_constraint"],
	update_columns: Array<GraphQLTypes["rooms_update_column"]>,
	where?: GraphQLTypes["rooms_bool_exp"]
};
	/** Ordering options when selecting data from "rooms". */
["rooms_order_by"]: {
		attendances_aggregate?: GraphQLTypes["user_attendances_aggregate_order_by"],
	created_at?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	name?: GraphQLTypes["order_by"],
	number?: GraphQLTypes["order_by"],
	state?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: rooms */
["rooms_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["rooms_prepend_input"]: {
		state?: GraphQLTypes["jsonb"]
};
	/** select columns of table "rooms" */
["rooms_select_column"]: rooms_select_column;
	/** input type for updating data in table "rooms" */
["rooms_set_input"]: {
		created_at?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string,
	number?: string,
	state?: GraphQLTypes["jsonb"],
	status?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** update columns of table "rooms" */
["rooms_update_column"]: rooms_update_column;
	["subscription_root"]: {
	__typename: "subscription_root",
	/** fetch data from the table: "rooms" */
	rooms: Array<GraphQLTypes["rooms"]>,
	/** fetch aggregated fields from the table: "rooms" */
	rooms_aggregate: GraphQLTypes["rooms_aggregate"],
	/** fetch data from the table: "rooms" using primary key columns */
	rooms_by_pk?: GraphQLTypes["rooms"],
	/** fetch data from the table: "user_attendances" */
	user_attendances: Array<GraphQLTypes["user_attendances"]>,
	/** fetch aggregated fields from the table: "user_attendances" */
	user_attendances_aggregate: GraphQLTypes["user_attendances_aggregate"],
	/** fetch data from the table: "user_attendances" using primary key columns */
	user_attendances_by_pk?: GraphQLTypes["user_attendances"],
	/** fetch data from the table: "users" */
	users: Array<GraphQLTypes["users"]>,
	/** fetch aggregated fields from the table: "users" */
	users_aggregate: GraphQLTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?: GraphQLTypes["users"]
};
	["timestamptz"]:any;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: {
		_eq?: GraphQLTypes["timestamptz"],
	_gt?: GraphQLTypes["timestamptz"],
	_gte?: GraphQLTypes["timestamptz"],
	_in?: Array<GraphQLTypes["timestamptz"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["timestamptz"],
	_lte?: GraphQLTypes["timestamptz"],
	_neq?: GraphQLTypes["timestamptz"],
	_nin?: Array<GraphQLTypes["timestamptz"]>
};
	/** columns and relationships of "user_attendances" */
["user_attendances"]: {
	__typename: "user_attendances",
	created_at: GraphQLTypes["timestamptz"],
	holding?: string,
	id: GraphQLTypes["uuid"],
	roles?: GraphQLTypes["jsonb"],
	/** An object relationship */
	room?: GraphQLTypes["rooms"],
	room_id: GraphQLTypes["uuid"],
	updated_at: GraphQLTypes["timestamptz"],
	/** An object relationship */
	user?: GraphQLTypes["users"],
	user_id: GraphQLTypes["uuid"]
};
	/** aggregated selection of "user_attendances" */
["user_attendances_aggregate"]: {
	__typename: "user_attendances_aggregate",
	aggregate?: GraphQLTypes["user_attendances_aggregate_fields"],
	nodes: Array<GraphQLTypes["user_attendances"]>
};
	/** aggregate fields of "user_attendances" */
["user_attendances_aggregate_fields"]: {
	__typename: "user_attendances_aggregate_fields",
	count: number,
	max?: GraphQLTypes["user_attendances_max_fields"],
	min?: GraphQLTypes["user_attendances_min_fields"]
};
	/** order by aggregate values of table "user_attendances" */
["user_attendances_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["user_attendances_max_order_by"],
	min?: GraphQLTypes["user_attendances_min_order_by"]
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["user_attendances_append_input"]: {
		roles?: GraphQLTypes["jsonb"]
};
	/** input type for inserting array relation for remote table "user_attendances" */
["user_attendances_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["user_attendances_insert_input"]>,
	/** upsert condition */
	on_conflict?: GraphQLTypes["user_attendances_on_conflict"]
};
	/** Boolean expression to filter rows from the table "user_attendances". All fields are combined with a logical 'AND'. */
["user_attendances_bool_exp"]: {
		_and?: Array<GraphQLTypes["user_attendances_bool_exp"]>,
	_not?: GraphQLTypes["user_attendances_bool_exp"],
	_or?: Array<GraphQLTypes["user_attendances_bool_exp"]>,
	created_at?: GraphQLTypes["timestamptz_comparison_exp"],
	holding?: GraphQLTypes["String_comparison_exp"],
	id?: GraphQLTypes["uuid_comparison_exp"],
	roles?: GraphQLTypes["jsonb_comparison_exp"],
	room?: GraphQLTypes["rooms_bool_exp"],
	room_id?: GraphQLTypes["uuid_comparison_exp"],
	updated_at?: GraphQLTypes["timestamptz_comparison_exp"],
	user?: GraphQLTypes["users_bool_exp"],
	user_id?: GraphQLTypes["uuid_comparison_exp"]
};
	/** unique or primary key constraints on table "user_attendances" */
["user_attendances_constraint"]: user_attendances_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["user_attendances_delete_at_path_input"]: {
		roles?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
["user_attendances_delete_elem_input"]: {
		roles?: number
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["user_attendances_delete_key_input"]: {
		roles?: string
};
	/** input type for inserting data into table "user_attendances" */
["user_attendances_insert_input"]: {
		created_at?: GraphQLTypes["timestamptz"],
	holding?: string,
	id?: GraphQLTypes["uuid"],
	roles?: GraphQLTypes["jsonb"],
	room?: GraphQLTypes["rooms_obj_rel_insert_input"],
	room_id?: GraphQLTypes["uuid"],
	updated_at?: GraphQLTypes["timestamptz"],
	user?: GraphQLTypes["users_obj_rel_insert_input"],
	user_id?: GraphQLTypes["uuid"]
};
	/** aggregate max on columns */
["user_attendances_max_fields"]: {
	__typename: "user_attendances_max_fields",
	created_at?: GraphQLTypes["timestamptz"],
	holding?: string,
	id?: GraphQLTypes["uuid"],
	room_id?: GraphQLTypes["uuid"],
	updated_at?: GraphQLTypes["timestamptz"],
	user_id?: GraphQLTypes["uuid"]
};
	/** order by max() on columns of table "user_attendances" */
["user_attendances_max_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	holding?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	room_id?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["user_attendances_min_fields"]: {
	__typename: "user_attendances_min_fields",
	created_at?: GraphQLTypes["timestamptz"],
	holding?: string,
	id?: GraphQLTypes["uuid"],
	room_id?: GraphQLTypes["uuid"],
	updated_at?: GraphQLTypes["timestamptz"],
	user_id?: GraphQLTypes["uuid"]
};
	/** order by min() on columns of table "user_attendances" */
["user_attendances_min_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	holding?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	room_id?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** response of any mutation on the table "user_attendances" */
["user_attendances_mutation_response"]: {
	__typename: "user_attendances_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["user_attendances"]>
};
	/** on_conflict condition type for table "user_attendances" */
["user_attendances_on_conflict"]: {
		constraint: GraphQLTypes["user_attendances_constraint"],
	update_columns: Array<GraphQLTypes["user_attendances_update_column"]>,
	where?: GraphQLTypes["user_attendances_bool_exp"]
};
	/** Ordering options when selecting data from "user_attendances". */
["user_attendances_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	holding?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	roles?: GraphQLTypes["order_by"],
	room?: GraphQLTypes["rooms_order_by"],
	room_id?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"],
	user?: GraphQLTypes["users_order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: user_attendances */
["user_attendances_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["user_attendances_prepend_input"]: {
		roles?: GraphQLTypes["jsonb"]
};
	/** select columns of table "user_attendances" */
["user_attendances_select_column"]: user_attendances_select_column;
	/** input type for updating data in table "user_attendances" */
["user_attendances_set_input"]: {
		created_at?: GraphQLTypes["timestamptz"],
	holding?: string,
	id?: GraphQLTypes["uuid"],
	roles?: GraphQLTypes["jsonb"],
	room_id?: GraphQLTypes["uuid"],
	updated_at?: GraphQLTypes["timestamptz"],
	user_id?: GraphQLTypes["uuid"]
};
	/** update columns of table "user_attendances" */
["user_attendances_update_column"]: user_attendances_update_column;
	/** columns and relationships of "users" */
["users"]: {
	__typename: "users",
	/** An array relationship */
	attendances: Array<GraphQLTypes["user_attendances"]>,
	/** An aggregate relationship */
	attendances_aggregate: GraphQLTypes["user_attendances_aggregate"],
	created_at: GraphQLTypes["timestamptz"],
	id: GraphQLTypes["uuid"],
	name: string,
	updated_at: GraphQLTypes["timestamptz"]
};
	/** aggregated selection of "users" */
["users_aggregate"]: {
	__typename: "users_aggregate",
	aggregate?: GraphQLTypes["users_aggregate_fields"],
	nodes: Array<GraphQLTypes["users"]>
};
	/** aggregate fields of "users" */
["users_aggregate_fields"]: {
	__typename: "users_aggregate_fields",
	count: number,
	max?: GraphQLTypes["users_max_fields"],
	min?: GraphQLTypes["users_min_fields"]
};
	/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
["users_bool_exp"]: {
		_and?: Array<GraphQLTypes["users_bool_exp"]>,
	_not?: GraphQLTypes["users_bool_exp"],
	_or?: Array<GraphQLTypes["users_bool_exp"]>,
	attendances?: GraphQLTypes["user_attendances_bool_exp"],
	created_at?: GraphQLTypes["timestamptz_comparison_exp"],
	id?: GraphQLTypes["uuid_comparison_exp"],
	name?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["timestamptz_comparison_exp"]
};
	/** unique or primary key constraints on table "users" */
["users_constraint"]: users_constraint;
	/** input type for inserting data into table "users" */
["users_insert_input"]: {
		attendances?: GraphQLTypes["user_attendances_arr_rel_insert_input"],
	created_at?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** aggregate max on columns */
["users_max_fields"]: {
	__typename: "users_max_fields",
	created_at?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** aggregate min on columns */
["users_min_fields"]: {
	__typename: "users_min_fields",
	created_at?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** response of any mutation on the table "users" */
["users_mutation_response"]: {
	__typename: "users_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["users"]>
};
	/** input type for inserting object relation for remote table "users" */
["users_obj_rel_insert_input"]: {
		data: GraphQLTypes["users_insert_input"],
	/** upsert condition */
	on_conflict?: GraphQLTypes["users_on_conflict"]
};
	/** on_conflict condition type for table "users" */
["users_on_conflict"]: {
		constraint: GraphQLTypes["users_constraint"],
	update_columns: Array<GraphQLTypes["users_update_column"]>,
	where?: GraphQLTypes["users_bool_exp"]
};
	/** Ordering options when selecting data from "users". */
["users_order_by"]: {
		attendances_aggregate?: GraphQLTypes["user_attendances_aggregate_order_by"],
	created_at?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	name?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: users */
["users_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "users" */
["users_select_column"]: users_select_column;
	/** input type for updating data in table "users" */
["users_set_input"]: {
		created_at?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** update columns of table "users" */
["users_update_column"]: users_update_column;
	["uuid"]:any;
	/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: {
		_eq?: GraphQLTypes["uuid"],
	_gt?: GraphQLTypes["uuid"],
	_gte?: GraphQLTypes["uuid"],
	_in?: Array<GraphQLTypes["uuid"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["uuid"],
	_lte?: GraphQLTypes["uuid"],
	_neq?: GraphQLTypes["uuid"],
	_nin?: Array<GraphQLTypes["uuid"]>
}
    }
/** column ordering options */
export const enum order_by {
	asc = "asc",
	asc_nulls_first = "asc_nulls_first",
	asc_nulls_last = "asc_nulls_last",
	desc = "desc",
	desc_nulls_first = "desc_nulls_first",
	desc_nulls_last = "desc_nulls_last"
}
/** unique or primary key constraints on table "rooms" */
export const enum rooms_constraint {
	rooms_number_key = "rooms_number_key",
	rooms_pkey = "rooms_pkey"
}
/** select columns of table "rooms" */
export const enum rooms_select_column {
	created_at = "created_at",
	id = "id",
	name = "name",
	number = "number",
	state = "state",
	status = "status",
	updated_at = "updated_at"
}
/** update columns of table "rooms" */
export const enum rooms_update_column {
	created_at = "created_at",
	id = "id",
	name = "name",
	number = "number",
	state = "state",
	status = "status",
	updated_at = "updated_at"
}
/** unique or primary key constraints on table "user_attendances" */
export const enum user_attendances_constraint {
	user_attendances_pkey = "user_attendances_pkey"
}
/** select columns of table "user_attendances" */
export const enum user_attendances_select_column {
	created_at = "created_at",
	holding = "holding",
	id = "id",
	roles = "roles",
	room_id = "room_id",
	updated_at = "updated_at",
	user_id = "user_id"
}
/** update columns of table "user_attendances" */
export const enum user_attendances_update_column {
	created_at = "created_at",
	holding = "holding",
	id = "id",
	roles = "roles",
	room_id = "room_id",
	updated_at = "updated_at",
	user_id = "user_id"
}
/** unique or primary key constraints on table "users" */
export const enum users_constraint {
	users_pkey = "users_pkey"
}
/** select columns of table "users" */
export const enum users_select_column {
	created_at = "created_at",
	id = "id",
	name = "name",
	updated_at = "updated_at"
}
/** update columns of table "users" */
export const enum users_update_column {
	created_at = "created_at",
	id = "id",
	name = "name",
	updated_at = "updated_at"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: boolean;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type SubscriptionToGraphQL<Z, T> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?: string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


export const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  X,
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
>(
  type: T,
  field: Z,
  fn: (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };



const allOperations = {
    "query": "query_root",
    "mutation": "mutation_root",
    "subscription": "subscription_root"
}

export type GenericOperation<O> = O extends 'query'
  ? "query_root"
  : O extends 'mutation'
  ? "mutation_root"
  : "subscription_root"

export const Thunder = (fn: FetchFunction) => <
  O extends 'query' | 'mutation' | 'subscription',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation, allOperations[operation])(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));  
  
export const SubscriptionThunder = (fn: SubscriptionFunction) => <
  O extends 'query' | 'mutation' | 'subscription',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(
  o: Z | ValueTypes[R],
  ops?: OperationOptions
)=>
  fullSubscriptionConstruct(fn)(operation, allOperations[operation])(
    o as any,
    ops,
  ) as SubscriptionToGraphQL<Z, GraphQLTypes[R]>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends 'query' | 'mutation' | 'subscription',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
  o: Z | ValueTypes[R],
  operationName?: string,
) => queryConstruct(operation, allOperations[operation], operationName)(o as any);
export const Selector = <T extends keyof ValueTypes>(key: T) => ZeusSelect<ValueTypes[T]>();
  

export const Gql = Chain('https://set-louse-29.hasura.app/v1/graphql')