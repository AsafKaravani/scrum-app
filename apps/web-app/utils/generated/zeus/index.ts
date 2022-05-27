/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

export type ValueTypes = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
	_eq?:boolean | null,
	_gt?:boolean | null,
	_gte?:boolean | null,
	_in?:boolean[],
	_is_null?:boolean | null,
	_lt?:boolean | null,
	_lte?:boolean | null,
	_neq?:boolean | null,
	_nin?:boolean[]
};
	/** columns and relationships of "Rooms" */
["Rooms"]: AliasType<{
Users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["Users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["Users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["Users_bool_exp"] | null},ValueTypes["Users"]],
Users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["Users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["Users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["Users_bool_exp"] | null},ValueTypes["Users_aggregate"]],
	createdAt?:boolean,
	id?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "Rooms" */
["Rooms_aggregate"]: AliasType<{
	aggregate?:ValueTypes["Rooms_aggregate_fields"],
	nodes?:ValueTypes["Rooms"],
		__typename?: boolean
}>;
	/** aggregate fields of "Rooms" */
["Rooms_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["Rooms_select_column"][],	distinct?:boolean | null},boolean],
	max?:ValueTypes["Rooms_max_fields"],
	min?:ValueTypes["Rooms_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "Rooms". All fields are combined with a logical 'AND'. */
["Rooms_bool_exp"]: {
	Users?:ValueTypes["Users_bool_exp"] | null,
	_and?:ValueTypes["Rooms_bool_exp"][],
	_not?:ValueTypes["Rooms_bool_exp"] | null,
	_or?:ValueTypes["Rooms_bool_exp"][],
	createdAt?:ValueTypes["timestamptz_comparison_exp"] | null,
	id?:ValueTypes["uuid_comparison_exp"] | null,
	name?:ValueTypes["String_comparison_exp"] | null
};
	/** unique or primary key constraints on table "Rooms" */
["Rooms_constraint"]:Rooms_constraint;
	/** input type for inserting data into table "Rooms" */
["Rooms_insert_input"]: {
	Users?:ValueTypes["Users_arr_rel_insert_input"] | null,
	createdAt?:ValueTypes["timestamptz"] | null,
	id?:ValueTypes["uuid"] | null,
	name?:string | null
};
	/** aggregate max on columns */
["Rooms_max_fields"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["Rooms_min_fields"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "Rooms" */
["Rooms_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["Rooms"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "Rooms" */
["Rooms_obj_rel_insert_input"]: {
	data:ValueTypes["Rooms_insert_input"],
	/** upsert condition */
	on_conflict?:ValueTypes["Rooms_on_conflict"] | null
};
	/** on_conflict condition type for table "Rooms" */
["Rooms_on_conflict"]: {
	constraint:ValueTypes["Rooms_constraint"],
	update_columns:ValueTypes["Rooms_update_column"][],
	where?:ValueTypes["Rooms_bool_exp"] | null
};
	/** Ordering options when selecting data from "Rooms". */
["Rooms_order_by"]: {
	Users_aggregate?:ValueTypes["Users_aggregate_order_by"] | null,
	createdAt?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	name?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: Rooms */
["Rooms_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "Rooms" */
["Rooms_select_column"]:Rooms_select_column;
	/** input type for updating data in table "Rooms" */
["Rooms_set_input"]: {
	createdAt?:ValueTypes["timestamptz"] | null,
	id?:ValueTypes["uuid"] | null,
	name?:string | null
};
	/** update columns of table "Rooms" */
["Rooms_update_column"]:Rooms_update_column;
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
	/** columns and relationships of "Users" */
["Users"]: AliasType<{
	/** An object relationship */
	Room?:ValueTypes["Rooms"],
	card?:boolean,
	id?:boolean,
	name?:boolean,
	roomId?:boolean,
	showingCard?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "Users" */
["Users_aggregate"]: AliasType<{
	aggregate?:ValueTypes["Users_aggregate_fields"],
	nodes?:ValueTypes["Users"],
		__typename?: boolean
}>;
	/** aggregate fields of "Users" */
["Users_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["Users_select_column"][],	distinct?:boolean | null},boolean],
	max?:ValueTypes["Users_max_fields"],
	min?:ValueTypes["Users_min_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "Users" */
["Users_aggregate_order_by"]: {
	count?:ValueTypes["order_by"] | null,
	max?:ValueTypes["Users_max_order_by"] | null,
	min?:ValueTypes["Users_min_order_by"] | null
};
	/** input type for inserting array relation for remote table "Users" */
["Users_arr_rel_insert_input"]: {
	data:ValueTypes["Users_insert_input"][],
	/** upsert condition */
	on_conflict?:ValueTypes["Users_on_conflict"] | null
};
	/** Boolean expression to filter rows from the table "Users". All fields are combined with a logical 'AND'. */
["Users_bool_exp"]: {
	Room?:ValueTypes["Rooms_bool_exp"] | null,
	_and?:ValueTypes["Users_bool_exp"][],
	_not?:ValueTypes["Users_bool_exp"] | null,
	_or?:ValueTypes["Users_bool_exp"][],
	card?:ValueTypes["String_comparison_exp"] | null,
	id?:ValueTypes["uuid_comparison_exp"] | null,
	name?:ValueTypes["String_comparison_exp"] | null,
	roomId?:ValueTypes["uuid_comparison_exp"] | null,
	showingCard?:ValueTypes["Boolean_comparison_exp"] | null
};
	/** unique or primary key constraints on table "Users" */
["Users_constraint"]:Users_constraint;
	/** input type for inserting data into table "Users" */
["Users_insert_input"]: {
	Room?:ValueTypes["Rooms_obj_rel_insert_input"] | null,
	card?:string | null,
	id?:ValueTypes["uuid"] | null,
	name?:string | null,
	roomId?:ValueTypes["uuid"] | null,
	showingCard?:boolean | null
};
	/** aggregate max on columns */
["Users_max_fields"]: AliasType<{
	card?:boolean,
	id?:boolean,
	name?:boolean,
	roomId?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "Users" */
["Users_max_order_by"]: {
	card?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	name?:ValueTypes["order_by"] | null,
	roomId?:ValueTypes["order_by"] | null
};
	/** aggregate min on columns */
["Users_min_fields"]: AliasType<{
	card?:boolean,
	id?:boolean,
	name?:boolean,
	roomId?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "Users" */
["Users_min_order_by"]: {
	card?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	name?:ValueTypes["order_by"] | null,
	roomId?:ValueTypes["order_by"] | null
};
	/** response of any mutation on the table "Users" */
["Users_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["Users"],
		__typename?: boolean
}>;
	/** on_conflict condition type for table "Users" */
["Users_on_conflict"]: {
	constraint:ValueTypes["Users_constraint"],
	update_columns:ValueTypes["Users_update_column"][],
	where?:ValueTypes["Users_bool_exp"] | null
};
	/** Ordering options when selecting data from "Users". */
["Users_order_by"]: {
	Room?:ValueTypes["Rooms_order_by"] | null,
	card?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	name?:ValueTypes["order_by"] | null,
	roomId?:ValueTypes["order_by"] | null,
	showingCard?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: Users */
["Users_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "Users" */
["Users_select_column"]:Users_select_column;
	/** input type for updating data in table "Users" */
["Users_set_input"]: {
	card?:string | null,
	id?:ValueTypes["uuid"] | null,
	name?:string | null,
	roomId?:ValueTypes["uuid"] | null,
	showingCard?:boolean | null
};
	/** update columns of table "Users" */
["Users_update_column"]:Users_update_column;
	/** mutation root */
["mutation_root"]: AliasType<{
delete_Rooms?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["Rooms_bool_exp"]},ValueTypes["Rooms_mutation_response"]],
delete_Rooms_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["Rooms"]],
delete_Users?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["Users_bool_exp"]},ValueTypes["Users_mutation_response"]],
delete_Users_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["Users"]],
insert_Rooms?: [{	/** the rows to be inserted */
	objects:ValueTypes["Rooms_insert_input"][],	/** upsert condition */
	on_conflict?:ValueTypes["Rooms_on_conflict"] | null},ValueTypes["Rooms_mutation_response"]],
insert_Rooms_one?: [{	/** the row to be inserted */
	object:ValueTypes["Rooms_insert_input"],	/** upsert condition */
	on_conflict?:ValueTypes["Rooms_on_conflict"] | null},ValueTypes["Rooms"]],
insert_Users?: [{	/** the rows to be inserted */
	objects:ValueTypes["Users_insert_input"][],	/** upsert condition */
	on_conflict?:ValueTypes["Users_on_conflict"] | null},ValueTypes["Users_mutation_response"]],
insert_Users_one?: [{	/** the row to be inserted */
	object:ValueTypes["Users_insert_input"],	/** upsert condition */
	on_conflict?:ValueTypes["Users_on_conflict"] | null},ValueTypes["Users"]],
update_Rooms?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["Rooms_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["Rooms_bool_exp"]},ValueTypes["Rooms_mutation_response"]],
update_Rooms_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["Rooms_set_input"] | null,	pk_columns:ValueTypes["Rooms_pk_columns_input"]},ValueTypes["Rooms"]],
update_Users?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["Users_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["Users_bool_exp"]},ValueTypes["Users_mutation_response"]],
update_Users_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["Users_set_input"] | null,	pk_columns:ValueTypes["Users_pk_columns_input"]},ValueTypes["Users"]],
		__typename?: boolean
}>;
	/** column ordering options */
["order_by"]:order_by;
	["query_root"]: AliasType<{
Rooms?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["Rooms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["Rooms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["Rooms_bool_exp"] | null},ValueTypes["Rooms"]],
Rooms_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["Rooms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["Rooms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["Rooms_bool_exp"] | null},ValueTypes["Rooms_aggregate"]],
Rooms_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["Rooms"]],
Users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["Users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["Users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["Users_bool_exp"] | null},ValueTypes["Users"]],
Users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["Users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["Users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["Users_bool_exp"] | null},ValueTypes["Users_aggregate"]],
Users_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["Users"]],
		__typename?: boolean
}>;
	["subscription_root"]: AliasType<{
Rooms?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["Rooms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["Rooms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["Rooms_bool_exp"] | null},ValueTypes["Rooms"]],
Rooms_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["Rooms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["Rooms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["Rooms_bool_exp"] | null},ValueTypes["Rooms_aggregate"]],
Rooms_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["Rooms"]],
Users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["Users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["Users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["Users_bool_exp"] | null},ValueTypes["Users"]],
Users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["Users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["Users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["Users_bool_exp"] | null},ValueTypes["Users_aggregate"]],
Users_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["Users"]],
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
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: GraphQLTypes["Boolean_comparison_exp"];
	/** columns and relationships of "Rooms" */
["Rooms"]: {
		/** An array relationship */
	Users:ModelTypes["Users"][],
	/** An aggregate relationship */
	Users_aggregate:ModelTypes["Users_aggregate"],
	createdAt?:ModelTypes["timestamptz"],
	id:ModelTypes["uuid"],
	name:string
};
	/** aggregated selection of "Rooms" */
["Rooms_aggregate"]: {
		aggregate?:ModelTypes["Rooms_aggregate_fields"],
	nodes:ModelTypes["Rooms"][]
};
	/** aggregate fields of "Rooms" */
["Rooms_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["Rooms_max_fields"],
	min?:ModelTypes["Rooms_min_fields"]
};
	/** Boolean expression to filter rows from the table "Rooms". All fields are combined with a logical 'AND'. */
["Rooms_bool_exp"]: GraphQLTypes["Rooms_bool_exp"];
	/** unique or primary key constraints on table "Rooms" */
["Rooms_constraint"]: GraphQLTypes["Rooms_constraint"];
	/** input type for inserting data into table "Rooms" */
["Rooms_insert_input"]: GraphQLTypes["Rooms_insert_input"];
	/** aggregate max on columns */
["Rooms_max_fields"]: {
		createdAt?:ModelTypes["timestamptz"],
	id?:ModelTypes["uuid"],
	name?:string
};
	/** aggregate min on columns */
["Rooms_min_fields"]: {
		createdAt?:ModelTypes["timestamptz"],
	id?:ModelTypes["uuid"],
	name?:string
};
	/** response of any mutation on the table "Rooms" */
["Rooms_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["Rooms"][]
};
	/** input type for inserting object relation for remote table "Rooms" */
["Rooms_obj_rel_insert_input"]: GraphQLTypes["Rooms_obj_rel_insert_input"];
	/** on_conflict condition type for table "Rooms" */
["Rooms_on_conflict"]: GraphQLTypes["Rooms_on_conflict"];
	/** Ordering options when selecting data from "Rooms". */
["Rooms_order_by"]: GraphQLTypes["Rooms_order_by"];
	/** primary key columns input for table: Rooms */
["Rooms_pk_columns_input"]: GraphQLTypes["Rooms_pk_columns_input"];
	/** select columns of table "Rooms" */
["Rooms_select_column"]: GraphQLTypes["Rooms_select_column"];
	/** input type for updating data in table "Rooms" */
["Rooms_set_input"]: GraphQLTypes["Rooms_set_input"];
	/** update columns of table "Rooms" */
["Rooms_update_column"]: GraphQLTypes["Rooms_update_column"];
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: GraphQLTypes["String_comparison_exp"];
	/** columns and relationships of "Users" */
["Users"]: {
		/** An object relationship */
	Room?:ModelTypes["Rooms"],
	card?:string,
	id:ModelTypes["uuid"],
	name:string,
	roomId?:ModelTypes["uuid"],
	showingCard:boolean
};
	/** aggregated selection of "Users" */
["Users_aggregate"]: {
		aggregate?:ModelTypes["Users_aggregate_fields"],
	nodes:ModelTypes["Users"][]
};
	/** aggregate fields of "Users" */
["Users_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["Users_max_fields"],
	min?:ModelTypes["Users_min_fields"]
};
	/** order by aggregate values of table "Users" */
["Users_aggregate_order_by"]: GraphQLTypes["Users_aggregate_order_by"];
	/** input type for inserting array relation for remote table "Users" */
["Users_arr_rel_insert_input"]: GraphQLTypes["Users_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "Users". All fields are combined with a logical 'AND'. */
["Users_bool_exp"]: GraphQLTypes["Users_bool_exp"];
	/** unique or primary key constraints on table "Users" */
["Users_constraint"]: GraphQLTypes["Users_constraint"];
	/** input type for inserting data into table "Users" */
["Users_insert_input"]: GraphQLTypes["Users_insert_input"];
	/** aggregate max on columns */
["Users_max_fields"]: {
		card?:string,
	id?:ModelTypes["uuid"],
	name?:string,
	roomId?:ModelTypes["uuid"]
};
	/** order by max() on columns of table "Users" */
["Users_max_order_by"]: GraphQLTypes["Users_max_order_by"];
	/** aggregate min on columns */
["Users_min_fields"]: {
		card?:string,
	id?:ModelTypes["uuid"],
	name?:string,
	roomId?:ModelTypes["uuid"]
};
	/** order by min() on columns of table "Users" */
["Users_min_order_by"]: GraphQLTypes["Users_min_order_by"];
	/** response of any mutation on the table "Users" */
["Users_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["Users"][]
};
	/** on_conflict condition type for table "Users" */
["Users_on_conflict"]: GraphQLTypes["Users_on_conflict"];
	/** Ordering options when selecting data from "Users". */
["Users_order_by"]: GraphQLTypes["Users_order_by"];
	/** primary key columns input for table: Users */
["Users_pk_columns_input"]: GraphQLTypes["Users_pk_columns_input"];
	/** select columns of table "Users" */
["Users_select_column"]: GraphQLTypes["Users_select_column"];
	/** input type for updating data in table "Users" */
["Users_set_input"]: GraphQLTypes["Users_set_input"];
	/** update columns of table "Users" */
["Users_update_column"]: GraphQLTypes["Users_update_column"];
	/** mutation root */
["mutation_root"]: {
		/** delete data from the table: "Rooms" */
	delete_Rooms?:ModelTypes["Rooms_mutation_response"],
	/** delete single row from the table: "Rooms" */
	delete_Rooms_by_pk?:ModelTypes["Rooms"],
	/** delete data from the table: "Users" */
	delete_Users?:ModelTypes["Users_mutation_response"],
	/** delete single row from the table: "Users" */
	delete_Users_by_pk?:ModelTypes["Users"],
	/** insert data into the table: "Rooms" */
	insert_Rooms?:ModelTypes["Rooms_mutation_response"],
	/** insert a single row into the table: "Rooms" */
	insert_Rooms_one?:ModelTypes["Rooms"],
	/** insert data into the table: "Users" */
	insert_Users?:ModelTypes["Users_mutation_response"],
	/** insert a single row into the table: "Users" */
	insert_Users_one?:ModelTypes["Users"],
	/** update data of the table: "Rooms" */
	update_Rooms?:ModelTypes["Rooms_mutation_response"],
	/** update single row of the table: "Rooms" */
	update_Rooms_by_pk?:ModelTypes["Rooms"],
	/** update data of the table: "Users" */
	update_Users?:ModelTypes["Users_mutation_response"],
	/** update single row of the table: "Users" */
	update_Users_by_pk?:ModelTypes["Users"]
};
	/** column ordering options */
["order_by"]: GraphQLTypes["order_by"];
	["query_root"]: {
		/** fetch data from the table: "Rooms" */
	Rooms:ModelTypes["Rooms"][],
	/** fetch aggregated fields from the table: "Rooms" */
	Rooms_aggregate:ModelTypes["Rooms_aggregate"],
	/** fetch data from the table: "Rooms" using primary key columns */
	Rooms_by_pk?:ModelTypes["Rooms"],
	/** An array relationship */
	Users:ModelTypes["Users"][],
	/** An aggregate relationship */
	Users_aggregate:ModelTypes["Users_aggregate"],
	/** fetch data from the table: "Users" using primary key columns */
	Users_by_pk?:ModelTypes["Users"]
};
	["subscription_root"]: {
		/** fetch data from the table: "Rooms" */
	Rooms:ModelTypes["Rooms"][],
	/** fetch aggregated fields from the table: "Rooms" */
	Rooms_aggregate:ModelTypes["Rooms_aggregate"],
	/** fetch data from the table: "Rooms" using primary key columns */
	Rooms_by_pk?:ModelTypes["Rooms"],
	/** An array relationship */
	Users:ModelTypes["Users"][],
	/** An aggregate relationship */
	Users_aggregate:ModelTypes["Users_aggregate"],
	/** fetch data from the table: "Users" using primary key columns */
	Users_by_pk?:ModelTypes["Users"]
};
	["timestamptz"]:any;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: GraphQLTypes["timestamptz_comparison_exp"];
	["uuid"]:any;
	/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: GraphQLTypes["uuid_comparison_exp"]
    }

export type GraphQLTypes = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
		_eq?: boolean,
	_gt?: boolean,
	_gte?: boolean,
	_in?: Array<boolean>,
	_is_null?: boolean,
	_lt?: boolean,
	_lte?: boolean,
	_neq?: boolean,
	_nin?: Array<boolean>
};
	/** columns and relationships of "Rooms" */
["Rooms"]: {
	__typename: "Rooms",
	/** An array relationship */
	Users: Array<GraphQLTypes["Users"]>,
	/** An aggregate relationship */
	Users_aggregate: GraphQLTypes["Users_aggregate"],
	createdAt?: GraphQLTypes["timestamptz"],
	id: GraphQLTypes["uuid"],
	name: string
};
	/** aggregated selection of "Rooms" */
["Rooms_aggregate"]: {
	__typename: "Rooms_aggregate",
	aggregate?: GraphQLTypes["Rooms_aggregate_fields"],
	nodes: Array<GraphQLTypes["Rooms"]>
};
	/** aggregate fields of "Rooms" */
["Rooms_aggregate_fields"]: {
	__typename: "Rooms_aggregate_fields",
	count: number,
	max?: GraphQLTypes["Rooms_max_fields"],
	min?: GraphQLTypes["Rooms_min_fields"]
};
	/** Boolean expression to filter rows from the table "Rooms". All fields are combined with a logical 'AND'. */
["Rooms_bool_exp"]: {
		Users?: GraphQLTypes["Users_bool_exp"],
	_and?: Array<GraphQLTypes["Rooms_bool_exp"]>,
	_not?: GraphQLTypes["Rooms_bool_exp"],
	_or?: Array<GraphQLTypes["Rooms_bool_exp"]>,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"],
	id?: GraphQLTypes["uuid_comparison_exp"],
	name?: GraphQLTypes["String_comparison_exp"]
};
	/** unique or primary key constraints on table "Rooms" */
["Rooms_constraint"]: Rooms_constraint;
	/** input type for inserting data into table "Rooms" */
["Rooms_insert_input"]: {
		Users?: GraphQLTypes["Users_arr_rel_insert_input"],
	createdAt?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string
};
	/** aggregate max on columns */
["Rooms_max_fields"]: {
	__typename: "Rooms_max_fields",
	createdAt?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string
};
	/** aggregate min on columns */
["Rooms_min_fields"]: {
	__typename: "Rooms_min_fields",
	createdAt?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string
};
	/** response of any mutation on the table "Rooms" */
["Rooms_mutation_response"]: {
	__typename: "Rooms_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["Rooms"]>
};
	/** input type for inserting object relation for remote table "Rooms" */
["Rooms_obj_rel_insert_input"]: {
		data: GraphQLTypes["Rooms_insert_input"],
	/** upsert condition */
	on_conflict?: GraphQLTypes["Rooms_on_conflict"]
};
	/** on_conflict condition type for table "Rooms" */
["Rooms_on_conflict"]: {
		constraint: GraphQLTypes["Rooms_constraint"],
	update_columns: Array<GraphQLTypes["Rooms_update_column"]>,
	where?: GraphQLTypes["Rooms_bool_exp"]
};
	/** Ordering options when selecting data from "Rooms". */
["Rooms_order_by"]: {
		Users_aggregate?: GraphQLTypes["Users_aggregate_order_by"],
	createdAt?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	name?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: Rooms */
["Rooms_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "Rooms" */
["Rooms_select_column"]: Rooms_select_column;
	/** input type for updating data in table "Rooms" */
["Rooms_set_input"]: {
		createdAt?: GraphQLTypes["timestamptz"],
	id?: GraphQLTypes["uuid"],
	name?: string
};
	/** update columns of table "Rooms" */
["Rooms_update_column"]: Rooms_update_column;
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
	/** columns and relationships of "Users" */
["Users"]: {
	__typename: "Users",
	/** An object relationship */
	Room?: GraphQLTypes["Rooms"],
	card?: string,
	id: GraphQLTypes["uuid"],
	name: string,
	roomId?: GraphQLTypes["uuid"],
	showingCard: boolean
};
	/** aggregated selection of "Users" */
["Users_aggregate"]: {
	__typename: "Users_aggregate",
	aggregate?: GraphQLTypes["Users_aggregate_fields"],
	nodes: Array<GraphQLTypes["Users"]>
};
	/** aggregate fields of "Users" */
["Users_aggregate_fields"]: {
	__typename: "Users_aggregate_fields",
	count: number,
	max?: GraphQLTypes["Users_max_fields"],
	min?: GraphQLTypes["Users_min_fields"]
};
	/** order by aggregate values of table "Users" */
["Users_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["Users_max_order_by"],
	min?: GraphQLTypes["Users_min_order_by"]
};
	/** input type for inserting array relation for remote table "Users" */
["Users_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["Users_insert_input"]>,
	/** upsert condition */
	on_conflict?: GraphQLTypes["Users_on_conflict"]
};
	/** Boolean expression to filter rows from the table "Users". All fields are combined with a logical 'AND'. */
["Users_bool_exp"]: {
		Room?: GraphQLTypes["Rooms_bool_exp"],
	_and?: Array<GraphQLTypes["Users_bool_exp"]>,
	_not?: GraphQLTypes["Users_bool_exp"],
	_or?: Array<GraphQLTypes["Users_bool_exp"]>,
	card?: GraphQLTypes["String_comparison_exp"],
	id?: GraphQLTypes["uuid_comparison_exp"],
	name?: GraphQLTypes["String_comparison_exp"],
	roomId?: GraphQLTypes["uuid_comparison_exp"],
	showingCard?: GraphQLTypes["Boolean_comparison_exp"]
};
	/** unique or primary key constraints on table "Users" */
["Users_constraint"]: Users_constraint;
	/** input type for inserting data into table "Users" */
["Users_insert_input"]: {
		Room?: GraphQLTypes["Rooms_obj_rel_insert_input"],
	card?: string,
	id?: GraphQLTypes["uuid"],
	name?: string,
	roomId?: GraphQLTypes["uuid"],
	showingCard?: boolean
};
	/** aggregate max on columns */
["Users_max_fields"]: {
	__typename: "Users_max_fields",
	card?: string,
	id?: GraphQLTypes["uuid"],
	name?: string,
	roomId?: GraphQLTypes["uuid"]
};
	/** order by max() on columns of table "Users" */
["Users_max_order_by"]: {
		card?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	name?: GraphQLTypes["order_by"],
	roomId?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["Users_min_fields"]: {
	__typename: "Users_min_fields",
	card?: string,
	id?: GraphQLTypes["uuid"],
	name?: string,
	roomId?: GraphQLTypes["uuid"]
};
	/** order by min() on columns of table "Users" */
["Users_min_order_by"]: {
		card?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	name?: GraphQLTypes["order_by"],
	roomId?: GraphQLTypes["order_by"]
};
	/** response of any mutation on the table "Users" */
["Users_mutation_response"]: {
	__typename: "Users_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["Users"]>
};
	/** on_conflict condition type for table "Users" */
["Users_on_conflict"]: {
		constraint: GraphQLTypes["Users_constraint"],
	update_columns: Array<GraphQLTypes["Users_update_column"]>,
	where?: GraphQLTypes["Users_bool_exp"]
};
	/** Ordering options when selecting data from "Users". */
["Users_order_by"]: {
		Room?: GraphQLTypes["Rooms_order_by"],
	card?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	name?: GraphQLTypes["order_by"],
	roomId?: GraphQLTypes["order_by"],
	showingCard?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: Users */
["Users_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "Users" */
["Users_select_column"]: Users_select_column;
	/** input type for updating data in table "Users" */
["Users_set_input"]: {
		card?: string,
	id?: GraphQLTypes["uuid"],
	name?: string,
	roomId?: GraphQLTypes["uuid"],
	showingCard?: boolean
};
	/** update columns of table "Users" */
["Users_update_column"]: Users_update_column;
	/** mutation root */
["mutation_root"]: {
	__typename: "mutation_root",
	/** delete data from the table: "Rooms" */
	delete_Rooms?: GraphQLTypes["Rooms_mutation_response"],
	/** delete single row from the table: "Rooms" */
	delete_Rooms_by_pk?: GraphQLTypes["Rooms"],
	/** delete data from the table: "Users" */
	delete_Users?: GraphQLTypes["Users_mutation_response"],
	/** delete single row from the table: "Users" */
	delete_Users_by_pk?: GraphQLTypes["Users"],
	/** insert data into the table: "Rooms" */
	insert_Rooms?: GraphQLTypes["Rooms_mutation_response"],
	/** insert a single row into the table: "Rooms" */
	insert_Rooms_one?: GraphQLTypes["Rooms"],
	/** insert data into the table: "Users" */
	insert_Users?: GraphQLTypes["Users_mutation_response"],
	/** insert a single row into the table: "Users" */
	insert_Users_one?: GraphQLTypes["Users"],
	/** update data of the table: "Rooms" */
	update_Rooms?: GraphQLTypes["Rooms_mutation_response"],
	/** update single row of the table: "Rooms" */
	update_Rooms_by_pk?: GraphQLTypes["Rooms"],
	/** update data of the table: "Users" */
	update_Users?: GraphQLTypes["Users_mutation_response"],
	/** update single row of the table: "Users" */
	update_Users_by_pk?: GraphQLTypes["Users"]
};
	/** column ordering options */
["order_by"]: order_by;
	["query_root"]: {
	__typename: "query_root",
	/** fetch data from the table: "Rooms" */
	Rooms: Array<GraphQLTypes["Rooms"]>,
	/** fetch aggregated fields from the table: "Rooms" */
	Rooms_aggregate: GraphQLTypes["Rooms_aggregate"],
	/** fetch data from the table: "Rooms" using primary key columns */
	Rooms_by_pk?: GraphQLTypes["Rooms"],
	/** An array relationship */
	Users: Array<GraphQLTypes["Users"]>,
	/** An aggregate relationship */
	Users_aggregate: GraphQLTypes["Users_aggregate"],
	/** fetch data from the table: "Users" using primary key columns */
	Users_by_pk?: GraphQLTypes["Users"]
};
	["subscription_root"]: {
	__typename: "subscription_root",
	/** fetch data from the table: "Rooms" */
	Rooms: Array<GraphQLTypes["Rooms"]>,
	/** fetch aggregated fields from the table: "Rooms" */
	Rooms_aggregate: GraphQLTypes["Rooms_aggregate"],
	/** fetch data from the table: "Rooms" using primary key columns */
	Rooms_by_pk?: GraphQLTypes["Rooms"],
	/** An array relationship */
	Users: Array<GraphQLTypes["Users"]>,
	/** An aggregate relationship */
	Users_aggregate: GraphQLTypes["Users_aggregate"],
	/** fetch data from the table: "Users" using primary key columns */
	Users_by_pk?: GraphQLTypes["Users"]
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
/** unique or primary key constraints on table "Rooms" */
export const enum Rooms_constraint {
	Rooms_name_key = "Rooms_name_key",
	Rooms_pkey = "Rooms_pkey"
}
/** select columns of table "Rooms" */
export const enum Rooms_select_column {
	createdAt = "createdAt",
	id = "id",
	name = "name"
}
/** update columns of table "Rooms" */
export const enum Rooms_update_column {
	createdAt = "createdAt",
	id = "id",
	name = "name"
}
/** unique or primary key constraints on table "Users" */
export const enum Users_constraint {
	Users_pkey = "Users_pkey"
}
/** select columns of table "Users" */
export const enum Users_select_column {
	card = "card",
	id = "id",
	name = "name",
	roomId = "roomId",
	showingCard = "showingCard"
}
/** update columns of table "Users" */
export const enum Users_update_column {
	card = "card",
	id = "id",
	name = "name",
	roomId = "roomId",
	showingCard = "showingCard"
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
  

export const Gql = Chain('https://assuring-egret-26.hasura.app/v1/graphql')