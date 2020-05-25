var searchIndex={};
searchIndex["cli_table"] = {"doc":"Rust crate for printing tables on command line.","i":[[3,"Cell","cli_table","A `Cell` in a `Table`",null,null],[3,"Row","","A `Row` in a `Table`",null,null],[3,"Table","","Struct for building a `Table` on command line",null,null],[4,"Error","","Errors returned by functions in this crate",null,null],[13,"MismatchedColumns","","Returned when there is a mismatch in number of columns in…",0,null],[11,"new","","Creates a new `Cell`",1,[[["t"],["cellformat"]],["self"]]],[11,"new","","Creates a new `Row`",2,[[["vec",["cell"]],["cell"]],["self"]]],[11,"new","","Creates a new `Table`",3,[[["vec",["row"]],["tableformat"],["row"]],[["table"],["error"],["result",["table","error"]]]]],[11,"print_stdout","","Prints current `Table` to `stdout`",3,[[["self"]],["result"]]],[11,"print_stderr","","Prints current `Table` to `stderr`",3,[[["self"]],["result"]]],[0,"format","","Utilities for formatting of a `Table`",null,null],[4,"Color","cli_table::format","The set of available colors for the terminal…",null,null],[13,"Black","","",4,null],[13,"Blue","","",4,null],[13,"Green","","",4,null],[13,"Red","","",4,null],[13,"Cyan","","",4,null],[13,"Magenta","","",4,null],[13,"Yellow","","",4,null],[13,"White","","",4,null],[13,"Ansi256","","",4,null],[13,"Rgb","","",4,null],[3,"CellFormat","","Struct for configuring a `Cell`'s format",null,null],[3,"CellFormatBuilder","","Builder for `CellFormat`",null,null],[3,"Padding","","Used to add padding to the contents of a `Cell`",null,null],[3,"PaddingBuilder","","Builder for `Padding`",null,null],[3,"Border","","Borders of a `Table`",null,null],[3,"BorderBuilder","","Builder for `Border`",null,null],[3,"HorizontalLine","","A horizontal line in a `Table` (border or row separator)",null,null],[3,"Separator","","Inner (column/row) separators of a `Table`",null,null],[3,"SeparatorBuilder","","Builder for `Separator`",null,null],[3,"TableFormat","","Struct for configuring a `Table`'s format",null,null],[3,"VerticalLine","","A vertical line in a `Table` (border or column separator)",null,null],[4,"Align","","Used to vertically align contents of a `Cell`",null,null],[13,"Top","","Aligns contents to top",5,null],[13,"Bottom","","Aligns contents to bottom",5,null],[13,"Center","","Aligns contents to center",5,null],[4,"Justify","","Used to horizontally justify contents of a `Cell`",null,null],[13,"Left","","Justifies contents to left",6,null],[13,"Right","","Justifies contents to right",6,null],[13,"Center","","Justifies contents to center",6,null],[11,"builder","","Creates a new builder for `CellFormat`",7,[[],["cellformatbuilder"]]],[11,"justify","","Justify contents of a `Cell`",8,[[["justify"]],["self"]]],[11,"align","","Align contents of a `Cell`",8,[[["align"]],["self"]]],[11,"padding","","Sets padding of a `Cell`",8,[[["padding"]],["self"]]],[11,"foreground_color","","Set foreground color of a `Cell`",8,[[["option",["color"]],["color"]],["self"]]],[11,"background_color","","Set background color of a `Cell`",8,[[["option",["color"]],["color"]],["self"]]],[11,"bold","","Set contents of `Cell` to be bold",8,[[["bool"]],["self"]]],[11,"underline","","Set contents of `Cell` to be underlined",8,[[["bool"]],["self"]]],[11,"build","","Build `CellFormat`",8,[[],["cellformat"]]],[11,"builder","","Creates a new builder for `Padding`",9,[[],["paddingbuilder"]]],[11,"left","","Sets left padding of a `Cell`",10,[[["usize"]],["self"]]],[11,"right","","Sets right padding of a `Cell`",10,[[["usize"]],["self"]]],[11,"top","","Sets top padding of a `Cell`",10,[[["usize"]],["self"]]],[11,"bottom","","Sets bottom padding of a `Cell`",10,[[["usize"]],["self"]]],[11,"build","","Build `Padding`",10,[[],["padding"]]],[11,"new","","Creates a new instance of `VerticalLine`",11,[[["char"]],["self"]]],[11,"new","","Creates a new instance of `HorizontalLine`",12,[[["char"]],["self"]]],[11,"builder","","Creates a new builder for `Border`",13,[[],["borderbuilder"]]],[11,"top","","Set top border of a `Table`",14,[[["horizontalline"]],["self"]]],[11,"bottom","","Set bottom border of a `Table`",14,[[["horizontalline"]],["self"]]],[11,"left","","Set left border of a `Table`",14,[[["verticalline"]],["self"]]],[11,"right","","Set right border of a `Table`",14,[[["verticalline"]],["self"]]],[11,"build","","Build `Border`",14,[[],["border"]]],[11,"builder","","Creates a new builder for `Separator`",15,[[],["separatorbuilder"]]],[11,"column","","Set column separators of a `Table`",16,[[["option",["verticalline"]],["verticalline"]],["self"]]],[11,"row","","Set column separators of a `Table`",16,[[["option",["horizontalline"]],["horizontalline"]],["self"]]],[11,"title","","Set title title of a `Table`",16,[[["option",["horizontalline"]],["horizontalline"]],["self"]]],[11,"build","","Build `Separator`",16,[[],["separator"]]],[11,"new","","Creates a new instance of `TableFormat`",17,[[["border"],["separator"]],["self"]]],[17,"BORDER_COLUMN_ROW","","Format with borders, column separators and row separators…",null,null],[17,"BORDER_COLUMN_TITLE","","Format with borders, column separators and title separator…",null,null],[17,"BORDER_COLUMN_NO_ROW","","Format with borders and column separators (without row…",null,null],[17,"NO_BORDER_COLUMN_TITLE","","Format with no borders, column separators and title…",null,null],[17,"NO_BORDER_COLUMN_ROW","","Format with no borders, column separators and row separators",null,null],[17,"BORDER_NO_COLUMN_ROW","","Format with borders and row separators (without column…",null,null],[11,"from","cli_table","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_string","","",0,[[["self"]],["string"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","cli_table::format","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,[[["self"],["t"]]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,[[["self"],["t"]]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"try_into","","",10,[[],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"type_id","","",10,[[["self"]],["typeid"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[],["u"]]],[11,"to_owned","","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,[[["self"],["t"]]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"try_into","","",13,[[],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"type_id","","",13,[[["self"]],["typeid"]]],[11,"from","","",14,[[["t"]],["t"]]],[11,"into","","",14,[[],["u"]]],[11,"to_owned","","",14,[[["self"]],["t"]]],[11,"clone_into","","",14,[[["self"],["t"]]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"try_into","","",14,[[],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"type_id","","",14,[[["self"]],["typeid"]]],[11,"from","","",12,[[["t"]],["t"]]],[11,"into","","",12,[[],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,[[["self"],["t"]]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"try_into","","",12,[[],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"type_id","","",12,[[["self"]],["typeid"]]],[11,"from","","",15,[[["t"]],["t"]]],[11,"into","","",15,[[],["u"]]],[11,"to_owned","","",15,[[["self"]],["t"]]],[11,"clone_into","","",15,[[["self"],["t"]]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"try_into","","",15,[[],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"type_id","","",15,[[["self"]],["typeid"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"into","","",16,[[],["u"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"try_into","","",16,[[],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"type_id","","",16,[[["self"]],["typeid"]]],[11,"from","","",17,[[["t"]],["t"]]],[11,"into","","",17,[[],["u"]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"try_into","","",17,[[],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"type_id","","",17,[[["self"]],["typeid"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,[[["self"],["t"]]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"type_id","","",11,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,[[["self"],["t"]]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,[[["self"],["t"]]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"clone","","",4,[[["self"]],["color"]]],[11,"eq","","",4,[[["color"],["self"]],["bool"]]],[11,"ne","","",4,[[["color"],["self"]],["bool"]]],[11,"fmt","","",4,[[["self"],["formatter"]],[["result",["error"]],["error"]]]],[11,"from_str","","",4,[[["str"]],[["parsecolorerror"],["result",["color","parsecolorerror"]],["color"]]]],[11,"clone","","",7,[[["self"]],["cellformat"]]],[11,"clone","","",6,[[["self"]],["justify"]]],[11,"clone","","",5,[[["self"]],["align"]]],[11,"clone","","",9,[[["self"]],["padding"]]],[11,"clone","","",11,[[["self"]],["verticalline"]]],[11,"clone","","",12,[[["self"]],["horizontalline"]]],[11,"clone","","",13,[[["self"]],["border"]]],[11,"clone","","",14,[[["self"]],["borderbuilder"]]],[11,"clone","","",15,[[["self"]],["separator"]]],[11,"default","","",7,[[],["cellformat"]]],[11,"default","","",8,[[],["cellformatbuilder"]]],[11,"default","","",6,[[],["self"]]],[11,"default","","",5,[[],["self"]]],[11,"default","","",9,[[],["padding"]]],[11,"default","","",10,[[],["paddingbuilder"]]],[11,"default","","",11,[[],["self"]]],[11,"default","","",12,[[],["self"]]],[11,"default","","",13,[[],["self"]]],[11,"default","","",15,[[],["self"]]],[11,"default","","",17,[[],["tableformat"]]],[11,"eq","","",11,[[["self"],["verticalline"]],["bool"]]],[11,"ne","","",11,[[["self"],["verticalline"]],["bool"]]],[11,"eq","","",12,[[["self"],["horizontalline"]],["bool"]]],[11,"ne","","",12,[[["self"],["horizontalline"]],["bool"]]],[11,"eq","","",13,[[["self"],["border"]],["bool"]]],[11,"ne","","",13,[[["self"],["border"]],["bool"]]],[11,"eq","","",14,[[["self"],["borderbuilder"]],["bool"]]],[11,"ne","","",14,[[["self"],["borderbuilder"]],["bool"]]],[11,"eq","","",15,[[["self"],["separator"]],["bool"]]],[11,"ne","","",15,[[["self"],["separator"]],["bool"]]],[11,"fmt","cli_table","",1,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","cli_table::format","",7,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",8,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",6,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",5,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",9,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",10,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",11,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",12,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",13,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",14,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",15,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",16,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",17,[[["formatter"],["self"]],["result"]]],[11,"fmt","cli_table","",0,[[["formatter"],["self"]],["result"]]]],"p":[[4,"Error"],[3,"Cell"],[3,"Row"],[3,"Table"],[4,"Color"],[4,"Align"],[4,"Justify"],[3,"CellFormat"],[3,"CellFormatBuilder"],[3,"Padding"],[3,"PaddingBuilder"],[3,"VerticalLine"],[3,"HorizontalLine"],[3,"Border"],[3,"BorderBuilder"],[3,"Separator"],[3,"SeparatorBuilder"],[3,"TableFormat"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);