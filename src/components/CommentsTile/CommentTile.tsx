import { Comment } from "@/types/types";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography, Divider } from "@mui/material";
import React from "react";

const CommentTile = ({ id, name, body, email }: Comment) => {
    return (
        <React.Fragment key={id}>
            <ListItem alignItems="flex-start" className="bg-palitra-1-1">
                <ListItemAvatar>
                    <Avatar alt={name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={body}
                    className="bg-palitra-1-1 text-palitra-1-6"
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                className="text-palitra-1-6"
                            >
                                {name}
                            </Typography>
                            {` ${email}`}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" />
        </React.Fragment>
    );
};

export default CommentTile;
