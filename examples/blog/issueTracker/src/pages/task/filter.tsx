import React from "react";
import {
    Form,
    FormProps,
    Input,
    useSelect,
    Select,
    DatePicker,
    Icons,
    Button,
} from "@pankod/refine";

import { ITask, IPriority, IStatus, IAuthUser } from "interfaces";

const { RangePicker } = DatePicker;

export const Filter: React.FC<{ formProps: FormProps }> = ({ formProps }) => {
    const { selectProps: labelSelectProps } = useSelect<ITask>({
        resource: "label",
    });

    const { selectProps: priorityProps } = useSelect<IPriority>({
        resource: "priority",
    });

    const { selectProps: statusProps } = useSelect<IStatus>({
        resource: "status",
    });

    const { selectProps: assigneProps } = useSelect<IAuthUser>({
        resource: "users",
        optionValue: "id",
        optionLabel: "email",
    });

    return (
        <Form layout="vertical" {...formProps}>
            <Form.Item label="Search" name="title">
                <Input placeholder="Title" prefix={<Icons.SearchOutlined />} />
            </Form.Item>
            <Form.Item label="Label" name="label">
                <Select
                    {...labelSelectProps}
                    allowClear
                    placeholder="Seach Label"
                />
            </Form.Item>
            <Form.Item label="Priority" name="priority">
                <Select
                    {...priorityProps}
                    allowClear
                    placeholder="Seach Priority"
                />
            </Form.Item>
            <Form.Item label="Status" name="status">
                <Select
                    {...statusProps}
                    allowClear
                    placeholder="Search Status"
                />
            </Form.Item>
            <Form.Item label="Assigned" name="users">
                <Select
                    {...assigneProps}
                    allowClear
                    placeholder="Search Assignee"
                />
            </Form.Item>
            <Form.Item label="Start Date" name="start_time">
                <RangePicker />
            </Form.Item>
            <Form.Item label="Due Date" name="end_time">
                <RangePicker />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary">
                    Filter
                </Button>
            </Form.Item>
        </Form>
    );
};
