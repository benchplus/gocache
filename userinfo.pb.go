// Code generated by protoc-gen-go. DO NOT EDIT.
// source: userinfo.proto

package gocache

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type UserInfo struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Age                  int32    `protobuf:"varint,2,opt,name=age,proto3" json:"age,omitempty"`
	Gender               int32    `protobuf:"varint,3,opt,name=gender,proto3" json:"gender,omitempty"`
	Company              string   `protobuf:"bytes,4,opt,name=company,proto3" json:"company,omitempty"`
	Skills               []string `protobuf:"bytes,5,rep,name=skills,proto3" json:"skills,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserInfo) Reset()         { *m = UserInfo{} }
func (m *UserInfo) String() string { return proto.CompactTextString(m) }
func (*UserInfo) ProtoMessage()    {}
func (*UserInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_785a78c34699a93d, []int{0}
}

func (m *UserInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserInfo.Unmarshal(m, b)
}
func (m *UserInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserInfo.Marshal(b, m, deterministic)
}
func (m *UserInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserInfo.Merge(m, src)
}
func (m *UserInfo) XXX_Size() int {
	return xxx_messageInfo_UserInfo.Size(m)
}
func (m *UserInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_UserInfo.DiscardUnknown(m)
}

var xxx_messageInfo_UserInfo proto.InternalMessageInfo

func (m *UserInfo) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UserInfo) GetAge() int32 {
	if m != nil {
		return m.Age
	}
	return 0
}

func (m *UserInfo) GetGender() int32 {
	if m != nil {
		return m.Gender
	}
	return 0
}

func (m *UserInfo) GetCompany() string {
	if m != nil {
		return m.Company
	}
	return ""
}

func (m *UserInfo) GetSkills() []string {
	if m != nil {
		return m.Skills
	}
	return nil
}

func init() {
	proto.RegisterType((*UserInfo)(nil), "gocache.UserInfo")
}

func init() { proto.RegisterFile("userinfo.proto", fileDescriptor_785a78c34699a93d) }

var fileDescriptor_785a78c34699a93d = []byte{
	// 148 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x2b, 0x2d, 0x4e, 0x2d,
	0xca, 0xcc, 0x4b, 0xcb, 0xd7, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x4f, 0xcf, 0x4f, 0x4e,
	0x4c, 0xce, 0x48, 0x55, 0xaa, 0xe2, 0xe2, 0x08, 0x2d, 0x4e, 0x2d, 0xf2, 0xcc, 0x4b, 0xcb, 0x17,
	0x12, 0xe2, 0x62, 0xc9, 0x4b, 0xcc, 0x4d, 0x95, 0x60, 0x54, 0x60, 0xd4, 0xe0, 0x0c, 0x02, 0xb3,
	0x85, 0x04, 0xb8, 0x98, 0x13, 0xd3, 0x53, 0x25, 0x98, 0x14, 0x18, 0x35, 0x58, 0x83, 0x40, 0x4c,
	0x21, 0x31, 0x2e, 0xb6, 0xf4, 0xd4, 0xbc, 0x94, 0xd4, 0x22, 0x09, 0x66, 0xb0, 0x20, 0x94, 0x27,
	0x24, 0xc1, 0xc5, 0x9e, 0x9c, 0x9f, 0x5b, 0x90, 0x98, 0x57, 0x29, 0xc1, 0x02, 0x36, 0x00, 0xc6,
	0x05, 0xe9, 0x28, 0xce, 0xce, 0xcc, 0xc9, 0x29, 0x96, 0x60, 0x55, 0x60, 0xd6, 0xe0, 0x0c, 0x82,
	0xf2, 0x92, 0xd8, 0xc0, 0x6e, 0x31, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff, 0x5f, 0x37, 0x7d, 0x6e,
	0x9d, 0x00, 0x00, 0x00,
}
