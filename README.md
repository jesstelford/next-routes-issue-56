# `next-routes` issue

See: [next-routes#56](https://github.com/fridays/next-routes/issues/56)

## Setup

```
git clone https://github.com/jesstelford/next-routes-issue-56.git next-routes-issue-56
cd next-routes-issue-56
yarn
yarn dev
```

## Reproduction

1. Open `http://localhost:3000/abc123`
   - Note: The `/abc123` page loads fine
1. Click the link to `/about`
   - Will redirect you back to `/abc123`
1. Note: Incorrectly receiving a 404
1. Refresh the page
1. `/abc123` works as expected
