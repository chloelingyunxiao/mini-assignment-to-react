import React from "react";
import "./style.css";

export const ContactTable = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td className="td">
            <strong>Email:</strong>
          </td>
          <td className="td">xiaolingyun412@gmail.com</td>
        </tr>
        <tr>
          <td className="td">
            <strong>Phone number:</strong>
          </td>
          <td className="td">206-300-2197</td>
        </tr>
        <tr>
          <td className="td">
            <strong>GitHub:</strong>
          </td>
          <td className="td">
            <a
              href="https://github.khoury.northeastern.edu/lingyunxiao"
              target="_blank"
            >
              https://github.khoury.northeastern.edu/lingyunxiao
            </a>
          </td>
        </tr>
        <tr>
          <td className="td">
            <strong>School email:</strong>
          </td>
          <td className="td">xiao.ling@northeastern.edu</td>
        </tr>
      </tbody>
    </table>
  );
};
