import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  margin: 1em auto;
  background: white;
  width: 95%;
  table-layout: fixed;
  max-width: 40rem;
  margin: 2rem auto;
  td,
  th {
    padding: 0.5em 1em;
    border: 1px solid #44464a;
  }
  thead {
    background: #44464a;
    color: white;
  }
  tbody,
  tr,
  th,
  td {
    display: block;
    padding: 0;
    white-space: normal;
  }

  th,
  td {
    padding: 0.75em 0.5em;
  }

  th[scope='row'] {
    background-color: #696b6e;
    color: white;
  }

  td {
    border-bottom: 1px solid #696b6e;
    height: auto;
    //min-height: 7em;
    vertical-align: middle;
    text-align: right;
  }

  td[data-title]:before {
    content: attr(data-title);
    float: left;
    font-size: 1em;
    width: 30%;
    text-align: left;
  }
  thead {
    position: absolute;
    clip: rect(1px 1px 1px 1px);
  }
  @media screen and (min-width: 48em) {
    thead {
      position: relative;
      clip: auto;
      height: auto;
      width: auto;
      overflow: auto;
    }
    tr:first-of-type {
      position: relative;
      clip: auto;
      height: auto;
      width: auto;
      overflow: auto;
    }
    th,
    td {
      display: table-cell;
      padding: 0.75em;
    }
    tbody {
      display: table-row-group;
    }
    tr {
      display: table-row;
    }
    tr {
      border-width: 1px;
    }
    th[scope='row'] {
      background-color: transparent;
      color: #44464a;
      text-align: left;
    }
    td {
      text-align: center;
      height: auto;
    }
    td[data-title]:before {
      content: none;
    }
    td ul,
    td p {
      margin: 0;
      padding-left: 1em;
      border-left: none;
      width: auto;
    }
  }
`;
export default Table;
